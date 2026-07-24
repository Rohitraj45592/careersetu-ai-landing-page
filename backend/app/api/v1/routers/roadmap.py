from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload

from app.api.v1.deps import CurrentUser, get_current_user, get_db
from app.models.roadmap import Roadmap, RoadmapMilestone
from app.schemas.roadmap import (
    MilestoneStatusUpdate,
    RoadmapGenerateRequest,
    RoadmapRead,
)
from app.services.roadmap_service import generate_milestones

router = APIRouter(prefix="/roadmap", tags=["roadmap"])


@router.get("/active", response_model=RoadmapRead | None)
def get_active_roadmap(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.scalar(
        select(Roadmap)
        .options(joinedload(Roadmap.milestones))
        .where(Roadmap.user_id == user.id, Roadmap.is_active == True)  # noqa: E712
    )


@router.post("/generate", response_model=RoadmapRead, status_code=status.HTTP_201_CREATED)
def generate_roadmap(
    payload: RoadmapGenerateRequest,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    # Retire any previous active roadmap
    db.query(Roadmap).filter(Roadmap.user_id == user.id, Roadmap.is_active == True).update(  # noqa: E712
        {"is_active": False}
    )

    roadmap = Roadmap(user_id=user.id, target_role=payload.target_role)
    db.add(roadmap)
    db.flush()  # get roadmap.id before inserting milestones

    for index, milestone in enumerate(generate_milestones(payload.target_role)):
        db.add(
            RoadmapMilestone(
                roadmap_id=roadmap.id,
                order_index=index,
                title=milestone["title"],
                description=milestone["description"],
            )
        )

    db.commit()
    db.refresh(roadmap)
    return roadmap


@router.patch("/milestones/{milestone_id}")
def update_milestone_status(
    milestone_id: str,
    payload: MilestoneStatusUpdate,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    milestone = db.scalar(
        select(RoadmapMilestone)
        .join(Roadmap)
        .where(RoadmapMilestone.id == milestone_id, Roadmap.user_id == user.id)
    )
    if milestone is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Milestone not found")

    milestone.status = payload.status
    db.commit()
    return {"id": str(milestone.id), "status": milestone.status}
