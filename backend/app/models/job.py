import uuid

from sqlalchemy import ForeignKey, Integer, String, Text
from sqlalchemy.dialects.postgresql import ARRAY, UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.base import TimestampedModel


class JobListing(TimestampedModel, Base):
    __tablename__ = "job_listings"

    title: Mapped[str] = mapped_column(String(255))
    company: Mapped[str] = mapped_column(String(255))
    location: Mapped[str] = mapped_column(String(255))
    work_mode: Mapped[str | None] = mapped_column(String(50))  # remote | hybrid | onsite
    description: Mapped[str] = mapped_column(Text)
    tags: Mapped[list[str] | None] = mapped_column(ARRAY(String))
    source_url: Mapped[str | None] = mapped_column(String(1000))

    matches: Mapped[list["JobMatch"]] = relationship(back_populates="job", cascade="all, delete-orphan")


class JobMatch(TimestampedModel, Base):
    __tablename__ = "job_matches"

    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), index=True)
    job_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("job_listings.id", ondelete="CASCADE"))

    match_score: Mapped[int] = mapped_column(Integer)  # 0-100, computed by job_service
    status: Mapped[str] = mapped_column(String(30), default="suggested")  # suggested|applied|interviewing|rejected|offer

    job: Mapped["JobListing"] = relationship(back_populates="matches")
