import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ProfileBase(BaseModel):
    full_name: str | None = None
    headline: str | None = None
    college: str | None = None
    degree: str | None = None
    graduation_year: int | None = None
    location: str | None = None
    bio: str | None = None
    target_role: str | None = None
    dream_companies: list[str] | None = None
    expected_salary: str | None = None
    preferred_location: str | None = None
    preferred_work_mode: str | None = None
    linkedin_url: str | None = None
    github_url: str | None = None
    portfolio_url: str | None = None


class ProfileUpdate(ProfileBase):
    pass


class ProfileRead(ProfileBase):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    user_id: uuid.UUID
    created_at: datetime
    updated_at: datetime
