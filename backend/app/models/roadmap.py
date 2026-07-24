import uuid

from sqlalchemy import ForeignKey, Integer, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.base import TimestampedModel


class Roadmap(TimestampedModel, Base):
    __tablename__ = "roadmaps"

    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), index=True)
    target_role: Mapped[str] = mapped_column(String(255))
    is_active: Mapped[bool] = mapped_column(default=True)

    milestones: Mapped[list["RoadmapMilestone"]] = relationship(
        back_populates="roadmap", cascade="all, delete-orphan", order_by="RoadmapMilestone.order_index"
    )


class RoadmapMilestone(TimestampedModel, Base):
    __tablename__ = "roadmap_milestones"

    roadmap_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("roadmaps.id", ondelete="CASCADE"))
    order_index: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(255))
    description: Mapped[str | None] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(30), default="not_started")  # not_started|in_progress|completed

    roadmap: Mapped["Roadmap"] = relationship(back_populates="milestones")
