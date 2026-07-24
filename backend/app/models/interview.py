import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.base import TimestampedModel


class InterviewSession(TimestampedModel, Base):
    __tablename__ = "interview_sessions"

    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), index=True)
    interview_type: Mapped[str] = mapped_column(String(50))  # dsa | system_design | behavioral | hr
    status: Mapped[str] = mapped_column(String(30), default="in_progress")  # in_progress|completed
    overall_score: Mapped[int | None] = mapped_column(Integer)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))

    questions: Mapped[list["InterviewQuestion"]] = relationship(
        back_populates="session", cascade="all, delete-orphan", order_by="InterviewQuestion.order_index"
    )


class InterviewQuestion(TimestampedModel, Base):
    __tablename__ = "interview_questions"

    session_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("interview_sessions.id", ondelete="CASCADE"))
    order_index: Mapped[int] = mapped_column(Integer)
    question: Mapped[str] = mapped_column(Text)
    answer: Mapped[str | None] = mapped_column(Text)
    feedback: Mapped[str | None] = mapped_column(Text)
    score: Mapped[int | None] = mapped_column(Integer)

    session: Mapped["InterviewSession"] = relationship(back_populates="questions")
