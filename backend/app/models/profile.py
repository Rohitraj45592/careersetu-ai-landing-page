import uuid

from sqlalchemy import String, Text
from sqlalchemy.dialects.postgresql import ARRAY, UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base
from app.models.base import TimestampedModel


class Profile(TimestampedModel, Base):
    __tablename__ = "profiles"

    # One row per Supabase auth user. Not a DB-level FK (see base.py),
    # but always equal to SupabaseUser.id.
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), unique=True, index=True)

    full_name: Mapped[str | None] = mapped_column(String(255))
    headline: Mapped[str | None] = mapped_column(String(255))
    college: Mapped[str | None] = mapped_column(String(255))
    degree: Mapped[str | None] = mapped_column(String(255))
    graduation_year: Mapped[int | None]
    location: Mapped[str | None] = mapped_column(String(255))
    bio: Mapped[str | None] = mapped_column(Text)

    target_role: Mapped[str | None] = mapped_column(String(255))
    dream_companies: Mapped[list[str] | None] = mapped_column(ARRAY(String))
    expected_salary: Mapped[str | None] = mapped_column(String(100))
    preferred_location: Mapped[str | None] = mapped_column(String(255))
    preferred_work_mode: Mapped[str | None] = mapped_column(String(50))

    linkedin_url: Mapped[str | None] = mapped_column(String(500))
    github_url: Mapped[str | None] = mapped_column(String(500))
    portfolio_url: Mapped[str | None] = mapped_column(String(500))
