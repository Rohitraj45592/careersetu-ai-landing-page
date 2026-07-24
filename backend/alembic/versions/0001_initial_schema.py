"""initial schema - all CareerSetu AI backend tables

Revision ID: 0001
Revises:
Create Date: 2026-07-18

"""
from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "0001"
down_revision: str | None = None
branch_labels: Sequence[str] | str | None = None
depends_on: Sequence[str] | str | None = None


def _timestamps():
    return [
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.func.now(),
            onupdate=sa.func.now(),
            nullable=False,
        ),
    ]


def upgrade() -> None:
    # --- profiles -----------------------------------------------------
    op.create_table(
        "profiles",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False, unique=True),
        sa.Column("full_name", sa.String(255)),
        sa.Column("headline", sa.String(255)),
        sa.Column("college", sa.String(255)),
        sa.Column("degree", sa.String(255)),
        sa.Column("graduation_year", sa.Integer()),
        sa.Column("location", sa.String(255)),
        sa.Column("bio", sa.Text()),
        sa.Column("target_role", sa.String(255)),
        sa.Column("dream_companies", postgresql.ARRAY(sa.String())),
        sa.Column("expected_salary", sa.String(100)),
        sa.Column("preferred_location", sa.String(255)),
        sa.Column("preferred_work_mode", sa.String(50)),
        sa.Column("linkedin_url", sa.String(500)),
        sa.Column("github_url", sa.String(500)),
        sa.Column("portfolio_url", sa.String(500)),
        *_timestamps(),
    )
    op.create_index("ix_profiles_user_id", "profiles", ["user_id"])

    # --- resumes / resume_analyses ------------------------------------
    op.create_table(
        "resumes",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("file_name", sa.String(255), nullable=False),
        sa.Column("storage_path", sa.String(1000), nullable=False),
        sa.Column("is_active", sa.Boolean(), server_default=sa.true(), nullable=False),
        *_timestamps(),
    )
    op.create_index("ix_resumes_user_id", "resumes", ["user_id"])

    op.create_table(
        "resume_analyses",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column(
            "resume_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("resumes.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("overall_score", sa.Integer(), nullable=False),
        sa.Column("ats_score", sa.Integer(), nullable=False),
        sa.Column("grammar_score", sa.Integer(), nullable=False),
        sa.Column("formatting_score", sa.Integer(), nullable=False),
        sa.Column("strengths", sa.JSON()),
        sa.Column("weaknesses", sa.JSON()),
        sa.Column("suggestions", sa.JSON()),
        sa.Column("keywords_found", sa.JSON()),
        sa.Column("missing_keywords", sa.JSON()),
        *_timestamps(),
    )
    op.create_index("ix_resume_analyses_user_id", "resume_analyses", ["user_id"])

    # --- career twin ----------------------------------------------------
    op.create_table(
        "career_twin_conversations",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("title", sa.String(255), server_default="New conversation", nullable=False),
        *_timestamps(),
    )
    op.create_index("ix_career_twin_conversations_user_id", "career_twin_conversations", ["user_id"])

    op.create_table(
        "career_twin_messages",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column(
            "conversation_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("career_twin_conversations.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("role", sa.String(20), nullable=False),
        sa.Column("content", sa.Text(), nullable=False),
        *_timestamps(),
    )

    # --- job hub --------------------------------------------------------
    op.create_table(
        "job_listings",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("title", sa.String(255), nullable=False),
        sa.Column("company", sa.String(255), nullable=False),
        sa.Column("location", sa.String(255), nullable=False),
        sa.Column("work_mode", sa.String(50)),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("tags", postgresql.ARRAY(sa.String())),
        sa.Column("source_url", sa.String(1000)),
        *_timestamps(),
    )

    op.create_table(
        "job_matches",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column(
            "job_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("job_listings.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("match_score", sa.Integer(), nullable=False),
        sa.Column("status", sa.String(30), server_default="suggested", nullable=False),
        *_timestamps(),
    )
    op.create_index("ix_job_matches_user_id", "job_matches", ["user_id"])

    # --- roadmap ----------------------------------------------------------
    op.create_table(
        "roadmaps",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("target_role", sa.String(255), nullable=False),
        sa.Column("is_active", sa.Boolean(), server_default=sa.true(), nullable=False),
        *_timestamps(),
    )
    op.create_index("ix_roadmaps_user_id", "roadmaps", ["user_id"])

    op.create_table(
        "roadmap_milestones",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column(
            "roadmap_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("roadmaps.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("order_index", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(255), nullable=False),
        sa.Column("description", sa.Text()),
        sa.Column("status", sa.String(30), server_default="not_started", nullable=False),
        *_timestamps(),
    )

    # --- mock interview -----------------------------------------------
    op.create_table(
        "interview_sessions",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("interview_type", sa.String(50), nullable=False),
        sa.Column("status", sa.String(30), server_default="in_progress", nullable=False),
        sa.Column("overall_score", sa.Integer()),
        sa.Column("completed_at", sa.DateTime(timezone=True)),
        *_timestamps(),
    )
    op.create_index("ix_interview_sessions_user_id", "interview_sessions", ["user_id"])

    op.create_table(
        "interview_questions",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column(
            "session_id",
            postgresql.UUID(as_uuid=True),
            sa.ForeignKey("interview_sessions.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("order_index", sa.Integer(), nullable=False),
        sa.Column("question", sa.Text(), nullable=False),
        sa.Column("answer", sa.Text()),
        sa.Column("feedback", sa.Text()),
        sa.Column("score", sa.Integer()),
        *_timestamps(),
    )

    # --- analytics ---------------------------------------------------------
    op.create_table(
        "analytics_snapshots",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("snapshot_date", sa.Date(), nullable=False),
        sa.Column("resume_score", sa.Integer()),
        sa.Column("ats_score", sa.Integer()),
        sa.Column("applications_count", sa.Integer(), server_default="0", nullable=False),
        sa.Column("interviews_completed", sa.Integer(), server_default="0", nullable=False),
        sa.Column("placement_readiness", sa.Integer()),
        *_timestamps(),
    )
    op.create_index("ix_analytics_snapshots_user_id", "analytics_snapshots", ["user_id"])
    op.create_index("ix_analytics_snapshots_snapshot_date", "analytics_snapshots", ["snapshot_date"])

    # --- notifications -------------------------------------------------
    op.create_table(
        "notifications",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("type", sa.String(50), nullable=False),
        sa.Column("title", sa.String(255), nullable=False),
        sa.Column("message", sa.Text(), nullable=False),
        sa.Column("is_read", sa.Boolean(), server_default=sa.false(), nullable=False),
        *_timestamps(),
    )
    op.create_index("ix_notifications_user_id", "notifications", ["user_id"])


def downgrade() -> None:
    op.drop_table("notifications")
    op.drop_table("analytics_snapshots")
    op.drop_table("interview_questions")
    op.drop_table("interview_sessions")
    op.drop_table("roadmap_milestones")
    op.drop_table("roadmaps")
    op.drop_table("job_matches")
    op.drop_table("job_listings")
    op.drop_table("career_twin_messages")
    op.drop_table("career_twin_conversations")
    op.drop_table("resume_analyses")
    op.drop_table("resumes")
    op.drop_table("profiles")
