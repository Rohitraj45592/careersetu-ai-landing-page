import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict


class InterviewSessionCreate(BaseModel):
    interview_type: str  # dsa | system_design | behavioral | hr


class QuestionRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    order_index: int
    question: str
    answer: str | None
    feedback: str | None
    score: int | None


class AnswerSubmit(BaseModel):
    question_id: uuid.UUID
    answer: str


class InterviewSessionRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    interview_type: str
    status: str
    overall_score: int | None
    created_at: datetime
    completed_at: datetime | None
    questions: list[QuestionRead] = []
