from fastapi import APIRouter

from app.api.v1.routers import (
    analytics,
    career_twin,
    interview,
    jobs,
    notifications,
    profile,
    resume,
    roadmap,
)

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(profile.router)
api_router.include_router(resume.router)
api_router.include_router(career_twin.router)
api_router.include_router(jobs.router)
api_router.include_router(roadmap.router)
api_router.include_router(interview.router)
api_router.include_router(analytics.router)
api_router.include_router(notifications.router)
