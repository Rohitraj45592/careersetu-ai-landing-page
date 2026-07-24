"""
Centralized settings. Every module reads config from here instead of
calling os.environ directly, so there is exactly one place that knows
about environment variables.
"""

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    ENVIRONMENT: str = "development"

    # Supabase Postgres - this backend only ever talks to the app's own
    # tables. It never reads/writes the `auth` schema directly; Supabase
    # Auth owns that entirely.
    DATABASE_URL: str
    DIRECT_URL: str

    # Used to verify (not issue) Supabase-signed JWTs.
    SUPABASE_JWT_SECRET: str
    SUPABASE_URL: str
    SUPABASE_JWT_AUDIENCE: str = "authenticated"

    CORS_ORIGINS: str = "http://localhost:3000"

    @property
    def cors_origins_list(self) -> list[str]:
        return [
            origin.strip()
            for origin in self.CORS_ORIGINS.split(",")
            if origin.strip()
        ]


@lru_cache
def get_settings() -> Settings:
    return Settings()  # type: ignore[call-arg]