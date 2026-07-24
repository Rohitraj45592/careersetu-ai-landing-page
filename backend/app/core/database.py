"""
SQLAlchemy engine + session factory.

Points at the same Postgres database Supabase Auth uses, but this
backend only ever touches its own tables (created via Alembic, see
backend/alembic/versions). It never reads or writes the `auth` schema.
"""

from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from app.core.config import get_settings

settings = get_settings()

engine = create_engine(settings.DATABASE_URL, pool_pre_ping=True, future=True)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)


class Base(DeclarativeBase):
    """Base class for every ORM model in this backend."""


def get_db() -> Generator[Session, None, None]:
    """FastAPI dependency: yields a DB session, always closes it."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
