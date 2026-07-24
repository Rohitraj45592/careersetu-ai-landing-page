from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.api.v1.deps import CurrentUser, get_current_user, get_db
from app.models.profile import Profile
from app.schemas.profile import ProfileRead, ProfileUpdate

router = APIRouter(prefix="/profile", tags=["profile"])


@router.get("/me", response_model=ProfileRead)
def get_my_profile(
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    profile = db.scalar(select(Profile).where(Profile.user_id == user.id))
    if profile is None:
        profile = Profile(user_id=user.id)
        db.add(profile)
        db.commit()
        db.refresh(profile)
    return profile


@router.put("/me", response_model=ProfileRead)
def update_my_profile(
    payload: ProfileUpdate,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    profile = db.scalar(select(Profile).where(Profile.user_id == user.id))
    if profile is None:
        profile = Profile(user_id=user.id)
        db.add(profile)

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(profile, field, value)

    db.commit()
    db.refresh(profile)
    return profile
