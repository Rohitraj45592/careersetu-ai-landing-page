import uuid
from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict


class MessageCreate(BaseModel):
    content: str


class MessageRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    role: Literal["user", "assistant"]
    content: str
    created_at: datetime


class ConversationRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    title: str
    created_at: datetime
    messages: list[MessageRead] = []
