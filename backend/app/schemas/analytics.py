from datetime import date

from pydantic import BaseModel, ConfigDict


class AnalyticsSnapshotRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    snapshot_date: date
    resume_score: int | None
    ats_score: int | None
    applications_count: int
    interviews_completed: int
    placement_readiness: int | None


class AnalyticsSummary(BaseModel):
    """What GET /analytics/summary returns - the numbers the Analytics page renders."""

    resume_score: int | None
    ats_score: int | None
    placement_readiness: int | None
    total_applications: int
    total_interviews: int
    trend: list[AnalyticsSnapshotRead]
