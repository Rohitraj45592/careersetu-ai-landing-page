from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.api.v1.deps import CurrentUser, get_current_user, get_db
from app.models.resume import Resume, ResumeAnalysis
from app.schemas.resume import (
    ResumeAnalysisRead,
    ResumeAnalysisRequest,
    ResumeCreate,
    ResumeRead,
)
from app.services.resume_service import analyze_resume_text

router = APIRouter(prefix="/resumes", tags=["resume-studio"])


@router.get("", response_model=list[ResumeRead])
def list_resumes(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.scalars(
        select(Resume).where(Resume.user_id == user.id).order_by(Resume.created_at.desc())
    ).all()


@router.post("", response_model=ResumeRead, status_code=status.HTTP_201_CREATED)
def register_uploaded_resume(
    payload: ResumeCreate,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """
    Call this after the file itself has already been uploaded to
    Supabase Storage from the frontend - this just records the
    metadata this backend needs to analyze it.
    """
    resume = Resume(user_id=user.id, file_name=payload.file_name, storage_path=payload.storage_path)
    db.add(resume)
    db.commit()
    db.refresh(resume)
    return resume


@router.post("/analyze", response_model=ResumeAnalysisRead)
def analyze_resume(
    payload: ResumeAnalysisRequest,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    resume = db.scalar(
        select(Resume).where(Resume.id == payload.resume_id, Resume.user_id == user.id)
    )
    if resume is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Resume not found")

    # TODO: fetch the actual file text from Supabase Storage using
    # resume.storage_path before analyzing. Placeholder text for now.
    result = analyze_resume_text(resume_text=resume.file_name, target_role=payload.target_role)

    analysis = ResumeAnalysis(resume_id=resume.id, user_id=user.id, **result)
    db.add(analysis)
    db.commit()
    db.refresh(analysis)
    return analysis


@router.get("/{resume_id}/analyses", response_model=list[ResumeAnalysisRead])
def list_resume_analyses(
    resume_id: str,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return db.scalars(
        select(ResumeAnalysis)
        .where(ResumeAnalysis.resume_id == resume_id, ResumeAnalysis.user_id == user.id)
        .order_by(ResumeAnalysis.created_at.desc())
    ).all()
