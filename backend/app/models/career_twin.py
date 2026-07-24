import uuid

from sqlalchemy import ForeignKey, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.base import TimestampedModel


class CareerTwinConversation(TimestampedModel, Base):
    __tablename__ = "career_twin_conversations"

    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), index=True)
    title: Mapped[str] = mapped_column(String(255), default="New conversation")

    messages: Mapped[list["CareerTwinMessage"]] = relationship(
        back_populates="conversation", cascade="all, delete-orphan", order_by="CareerTwinMessage.created_at"
    )


class CareerTwinMessage(TimestampedModel, Base):
    __tablename__ = "career_twin_messages"

    conversation_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("career_twin_conversations.id", ondelete="CASCADE")
    )
    role: Mapped[str] = mapped_column(String(20))  # "user" | "assistant"
    content: Mapped[str] = mapped_column(Text)

    conversation: Mapped["CareerTwinConversation"] = relationship(back_populates="messages")
