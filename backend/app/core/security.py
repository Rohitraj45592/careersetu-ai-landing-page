"""
Verifies JWTs that Supabase Auth already issued. This backend has no
signup/login/logout of its own - the frontend keeps using Supabase
(supabase.auth.signUp / signInWithPassword / etc.) exactly as it does
today, then sends the resulting access_token as a Bearer header on
every request to this API.

Supabase signs access tokens with the project's JWT secret (HS256).
If the Supabase project is migrated to asymmetric (RS256/ES256) signing
keys later, swap `jwt.decode(..., algorithms=["HS256"])` below for
JWKS-based verification - everything else in this file stays the same.
"""

from dataclasses import dataclass

from jose import JWTError, jwt

from app.core.config import get_settings

settings = get_settings()

ALGORITHM = "HS256"


class InvalidTokenError(Exception):
    """Raised for any malformed, expired, or otherwise untrustworthy token."""


@dataclass
class SupabaseUser:
    """The subset of the Supabase JWT claims this backend actually needs."""

    id: str  # `sub` claim - matches auth.users.id (uuid) in Supabase
    email: str | None
    role: str | None
    raw_claims: dict


def decode_supabase_token(token: str) -> SupabaseUser:
    try:
        payload = jwt.decode(
            token,
            settings.SUPABASE_JWT_SECRET,
            algorithms=[ALGORITHM],
            audience=settings.SUPABASE_JWT_AUDIENCE,
        )
    except JWTError as exc:
        raise InvalidTokenError(str(exc)) from exc

    user_id = payload.get("sub")
    if not user_id:
        raise InvalidTokenError("Token is missing the 'sub' claim")

    return SupabaseUser(
        id=user_id,
        email=payload.get("email"),
        role=payload.get("role"),
        raw_claims=payload,
    )
