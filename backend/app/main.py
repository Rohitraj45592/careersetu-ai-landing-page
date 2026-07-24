from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.api import api_router
from app.core.config import get_settings

settings = get_settings()

app = FastAPI(
    title="CareerSetu AI - Backend",
    description=(
        "Central backend for all AI and business logic in CareerSetu AI "
        "(resume analysis, Career Twin chat, job matching, roadmaps, "
        "mock interviews, analytics, profile, notifications). "
        "Authentication itself stays on Supabase Auth - this API only "
        "verifies the tokens Supabase already issued."
    ),
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)


@app.get("/health", tags=["health"])
def health_check():
    return {"status": "ok", "environment": settings.ENVIRONMENT}
