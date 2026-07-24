from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.api.v1.deps import CurrentUser, get_current_user, get_db
from app.models.notification import Notification
from app.schemas.notification import NotificationRead

router = APIRouter(prefix="/notifications", tags=["notifications"])


@router.get("", response_model=list[NotificationRead])
def list_notifications(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.scalars(
        select(Notification)
        .where(Notification.user_id == user.id)
        .order_by(Notification.created_at.desc())
        .limit(50)
    ).all()


@router.patch("/{notification_id}/read", response_model=NotificationRead)
def mark_as_read(
    notification_id: str,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    notification = db.scalar(
        select(Notification).where(Notification.id == notification_id, Notification.user_id == user.id)
    )
    if notification is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Notification not found")

    notification.is_read = True
    db.commit()
    db.refresh(notification)
    return notification
