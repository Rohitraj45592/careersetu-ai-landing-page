import uuid
from datetime import date

from sqlalchemy import Date, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base
from app.models.base import TimestampedModel


class AnalyticsSnapshot(TimestampedModel, Base):
    """One row per user per day - cheap to query for trend charts."""

    __tablename__ = "analytics_snapshots"

    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), index=True)
    snapshot_date: Mapped[date] = mapped_column(Date, index=True)

    resume_score: Mapped[int | None] = mapped_column(Integer)
    ats_score: Mapped[int | None] = mapped_column(Integer)
    applications_count: Mapped[int] = mapped_column(Integer, default=0)
    interviews_completed: Mapped[int] = mapped_column(Integer, default=0)
    placement_readiness: Mapped[int | None] = mapped_column(Integer)
