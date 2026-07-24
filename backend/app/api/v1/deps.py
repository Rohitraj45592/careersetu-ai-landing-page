from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import InvalidTokenError, SupabaseUser, decode_supabase_token

__all__ = ["get_db", "get_current_user", "CurrentUser"]

_bearer_scheme = HTTPBearer(auto_error=False)


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer_scheme),
) -> SupabaseUser:
    """
    Every protected route depends on this. It expects the frontend to
    forward the Supabase `access_token` as `Authorization: Bearer <token>`.

    Usage:
        @router.get("/me")
        def me(user: SupabaseUser = Depends(get_current_user)):
            return {"id": user.id, "email": user.email}
    """
    if credentials is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing bearer token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        return decode_supabase_token(credentials.credentials)
    except InvalidTokenError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid or expired token: {exc}",
            headers={"WWW-Authenticate": "Bearer"},
        ) from exc


CurrentUser = SupabaseUser


def db_session(db: Session = Depends(get_db)) -> Session:
    return db
