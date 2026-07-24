import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class JobListingRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    title: str
    company: str
    location: str
    work_mode: str | None
    description: str
    tags: list[str] | None
    source_url: str | None
    created_at: datetime


class JobMatchRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    match_score: int
    status: str
    job: JobListingRead


class JobMatchStatusUpdate(BaseModel):
    status: str  # suggested|applied|interviewing|rejected|offer
