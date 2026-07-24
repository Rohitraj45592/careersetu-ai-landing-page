from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload

from app.api.v1.deps import CurrentUser, get_current_user, get_db
from app.models.interview import InterviewQuestion, InterviewSession
from app.schemas.interview import (
    AnswerSubmit,
    InterviewSessionCreate,
    InterviewSessionRead,
)
from app.services.interview_service import evaluate_answer, generate_questions

router = APIRouter(prefix="/interviews", tags=["mock-interview"])


@router.get("", response_model=list[InterviewSessionRead])
def list_sessions(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.scalars(
        select(InterviewSession)
        .options(joinedload(InterviewSession.questions))
        .where(InterviewSession.user_id == user.id)
        .order_by(InterviewSession.created_at.desc())
    ).unique().all()


@router.post("", response_model=InterviewSessionRead, status_code=status.HTTP_201_CREATED)
def start_session(
    payload: InterviewSessionCreate,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    session = InterviewSession(user_id=user.id, interview_type=payload.interview_type)
    db.add(session)
    db.flush()

    for index, question_text in enumerate(generate_questions(payload.interview_type)):
        db.add(InterviewQuestion(session_id=session.id, order_index=index, question=question_text))

    db.commit()
    db.refresh(session)
    return session


@router.post("/{session_id}/answers", response_model=InterviewSessionRead)
def submit_answer(
    session_id: str,
    payload: AnswerSubmit,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    session = db.scalar(
        select(InterviewSession)
        .options(joinedload(InterviewSession.questions))
        .where(InterviewSession.id == session_id, InterviewSession.user_id == user.id)
    )
    if session is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Interview session not found")

    question = next((q for q in session.questions if str(q.id) == str(payload.question_id)), None)
    if question is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Question not found in this session")

    result = evaluate_answer(question.question, payload.answer)
    question.answer = payload.answer
    question.feedback = result["feedback"]
    question.score = result["score"]

    answered = [q for q in session.questions if q.score is not None]
    if len(answered) == len(session.questions):
        session.status = "completed"
        session.completed_at = datetime.now(timezone.utc)
        session.overall_score = round(sum(q.score for q in answered) / len(answered))

    db.commit()
    db.refresh(session)
    return session
