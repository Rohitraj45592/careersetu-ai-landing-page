from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.api.v1.deps import CurrentUser, get_current_user, get_db
from app.models.analytics import AnalyticsSnapshot
from app.schemas.analytics import AnalyticsSummary

router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.get("/summary", response_model=AnalyticsSummary)
def get_analytics_summary(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    snapshots = db.scalars(
        select(AnalyticsSnapshot)
        .where(AnalyticsSnapshot.user_id == user.id)
        .order_by(AnalyticsSnapshot.snapshot_date.asc())
        .limit(90)
    ).all()

    latest = snapshots[-1] if snapshots else None

    return AnalyticsSummary(
        resume_score=latest.resume_score if latest else None,
        ats_score=latest.ats_score if latest else None,
        placement_readiness=latest.placement_readiness if latest else None,
        total_applications=sum(s.applications_count for s in snapshots),
        total_interviews=sum(s.interviews_completed for s in snapshots),
        trend=list(snapshots),
    )
