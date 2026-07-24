import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ResumeCreate(BaseModel):
    file_name: str
    storage_path: str


class ResumeRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    file_name: str
    storage_path: str
    is_active: bool
    created_at: datetime


class ResumeAnalysisRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    resume_id: uuid.UUID
    overall_score: int
    ats_score: int
    grammar_score: int
    formatting_score: int
    strengths: list[str] | None
    weaknesses: list[str] | None
    suggestions: list[str] | None
    keywords_found: list[str] | None
    missing_keywords: list[str] | None
    created_at: datetime


class ResumeAnalysisRequest(BaseModel):
    resume_id: uuid.UUID
    target_role: str | None = None
