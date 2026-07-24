from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload

from app.api.v1.deps import CurrentUser, get_current_user, get_db
from app.models.job import JobListing, JobMatch
from app.models.profile import Profile
from app.schemas.job import JobListingRead, JobMatchRead, JobMatchStatusUpdate
from app.services.job_service import compute_match_score

router = APIRouter(prefix="/jobs", tags=["job-hub"])


@router.get("/listings", response_model=list[JobListingRead])
def list_job_listings(db: Session = Depends(get_db)):
    return db.scalars(select(JobListing).order_by(JobListing.created_at.desc())).all()


@router.get("/matches", response_model=list[JobMatchRead])
def list_my_matches(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.scalars(
        select(JobMatch)
        .options(joinedload(JobMatch.job))
        .where(JobMatch.user_id == user.id)
        .order_by(JobMatch.match_score.desc())
    ).all()


@router.post("/matches/refresh", response_model=list[JobMatchRead])
def refresh_my_matches(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    """Recompute match scores for this user against every open listing."""
    profile = db.scalar(select(Profile).where(Profile.user_id == user.id))
    profile_skills: list[str] = []  # TODO: pull from a real skills table once it exists

    listings = db.scalars(select(JobListing)).all()
    for job in listings:
        score = compute_match_score(profile_skills, job.tags or [])
        match = db.scalar(
            select(JobMatch).where(JobMatch.user_id == user.id, JobMatch.job_id == job.id)
        )
        if match is None:
            match = JobMatch(user_id=user.id, job_id=job.id, match_score=score)
            db.add(match)
        else:
            match.match_score = score

    db.commit()
    return db.scalars(
        select(JobMatch).options(joinedload(JobMatch.job)).where(JobMatch.user_id == user.id)
    ).all()


@router.patch("/matches/{match_id}", response_model=JobMatchRead)
def update_match_status(
    match_id: str,
    payload: JobMatchStatusUpdate,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    match = db.scalar(
        select(JobMatch)
        .options(joinedload(JobMatch.job))
        .where(JobMatch.id == match_id, JobMatch.user_id == user.id)
    )
    if match is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Match not found")

    match.status = payload.status
    db.commit()
    db.refresh(match)
    return match
