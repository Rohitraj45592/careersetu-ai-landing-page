import uuid

from sqlalchemy import Boolean, ForeignKey, Integer, JSON, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.base import TimestampedModel


class Resume(TimestampedModel, Base):
    __tablename__ = "resumes"

    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), index=True)
    file_name: Mapped[str] = mapped_column(String(255))
    storage_path: Mapped[str] = mapped_column(String(1000))  # Supabase Storage object path
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    analyses: Mapped[list["ResumeAnalysis"]] = relationship(
        back_populates="resume", cascade="all, delete-orphan"
    )


class ResumeAnalysis(TimestampedModel, Base):
    __tablename__ = "resume_analyses"

    resume_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("resumes.id", ondelete="CASCADE"))
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), index=True)

    overall_score: Mapped[int] = mapped_column(Integer)
    ats_score: Mapped[int] = mapped_column(Integer)
    grammar_score: Mapped[int] = mapped_column(Integer)
    formatting_score: Mapped[int] = mapped_column(Integer)

    strengths: Mapped[list | None] = mapped_column(JSON)
    weaknesses: Mapped[list | None] = mapped_column(JSON)
    suggestions: Mapped[list | None] = mapped_column(JSON)
    keywords_found: Mapped[list | None] = mapped_column(JSON)
    missing_keywords: Mapped[list | None] = mapped_column(JSON)

    resume: Mapped["Resume"] = relationship(back_populates="analyses")
