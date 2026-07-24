import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class RoadmapGenerateRequest(BaseModel):
    target_role: str


class MilestoneRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    order_index: int
    title: str
    description: str | None
    status: str


class MilestoneStatusUpdate(BaseModel):
    status: str  # not_started|in_progress|completed


class RoadmapRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    target_role: str
    is_active: bool
    created_at: datetime
    milestones: list[MilestoneRead] = []
