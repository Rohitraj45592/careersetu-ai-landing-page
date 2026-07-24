# CareerSetu AI — Backend

FastAPI backend for all AI and business logic in CareerSetu AI. **Auth stays
on Supabase Auth** — this service has no signup/login/logout of its own; it
only verifies the JWTs Supabase already issued.

```
Frontend (Next.js)
  ├─ Supabase Auth  → signup / login / logout / session refresh (unchanged)
  └─ FastAPI backend → resumes, career twin, jobs, roadmap, interviews,
                        analytics, profile, notifications
       └─ Supabase Postgres (same project's database, app tables only —
          never touches the `auth` schema)
```

## Why a separate service, and why it isn't a second auth system

Dashboard V2 already ships a complete Supabase auth flow (`middleware.ts`,
`lib/supabase/*`, `app/(auth)/*`, `app/auth/*`). This backend is additive: it
gives every AI/business-logic module (resume ATS scoring, Career Twin chat,
job matching, roadmap generation, mock interview evaluation, analytics
rollups, profile, notifications) one shared FastAPI service instead of each
becoming its own ad-hoc API route inside Next.js. It reuses the exact same
Supabase Postgres database, just a different set of tables.

## Local setup

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # fill in DATABASE_URL, SUPABASE_JWT_SECRET, SUPABASE_URL
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

- `DATABASE_URL` — Supabase Project Settings → Database → Connection string (URI).
- `SUPABASE_JWT_SECRET` — Project Settings → API → JWT Secret. Used only to
  *verify* tokens; this service never mints its own.
- Swagger UI: `http://localhost:8000/docs`

Frontend side: set `NEXT_PUBLIC_API_URL=http://localhost:8000` in `.env.local`
and use `apiFetch()` from `lib/api.ts` — it attaches the current Supabase
session's `access_token` automatically.

## How auth actually flows

1. Frontend keeps calling `supabase.auth.signUp()` / `signInWithPassword()`
   / `signOut()` exactly as it does today. Nothing about the existing login
   or signup pages changes.
2. For any call to this backend, the frontend sends
   `Authorization: Bearer <supabase_access_token>` (handled by `apiFetch`).
3. `app/core/security.py` verifies that token's signature against
   `SUPABASE_JWT_SECRET` (HS256) and extracts the user id from the `sub`
   claim — `app/api/v1/deps.py::get_current_user` is the dependency every
   protected route uses.
4. If the Supabase project later switches to asymmetric signing keys
   (RS256/ES256), only `decode_supabase_token()` needs to change to a
   JWKS-based verifier — nothing else in the codebase does.

## Project layout

```
app/
  core/          config.py (env), database.py (SQLAlchemy engine/session),
                 security.py (JWT verification)
  api/v1/
    deps.py      get_current_user, get_db - what every router imports
    api.py       aggregates every module's router
    routers/     one file per module (resume.py, career_twin.py, jobs.py, ...)
  models/        one file per module - SQLAlchemy tables
  schemas/       one file per module - Pydantic request/response shapes
  services/      one file per module - the actual AI/business logic,
                 isolated from routers so it can be swapped for a real
                 model call without touching persistence or HTTP code
alembic/         migrations (0001_initial_schema.py creates every table)
```

## Adding a new module

1. `models/<name>.py` — SQLAlchemy table(s), import them in `models/__init__.py`.
2. `schemas/<name>.py` — Pydantic Create/Read shapes.
3. `services/<name>_service.py` — the actual logic (or a placeholder like the
   others, clearly marked for a future real model call).
4. `api/v1/routers/<name>.py` — endpoints, depends on `get_current_user` for
   anything user-scoped.
5. One import + one `include_router(...)` line in `api/v1/api.py`.
6. `alembic revision --autogenerate -m "add <name> tables"` once you have a
   real Postgres connection, then `alembic upgrade head`.

## What's real vs. placeholder right now

Every endpoint below is fully wired end-to-end (routing → auth → DB →
response), verified in this environment via FastAPI's TestClient — health
check, protected-route rejection (both missing and invalid tokens), a valid
Supabase-style JWT reaching the DB layer, and OpenAPI schema generation.
`alembic upgrade head --sql` was used to confirm the migration produces
valid Postgres DDL end-to-end (tables, indexes, FKs). It has **not** been run
against a live Supabase database from this environment - do that once real
credentials are in `.env`.

The "AI" parts (resume scoring, chat replies, job matching, roadmap
generation, interview grading) currently return deterministic placeholder
data from `app/services/*.py`. Each of those files says exactly what to
replace and what shape to keep - that's the intended seam for plugging in
real models later, not an oversight.

## API surface (all under `/api/v1`, all except `/jobs/listings` require auth)

| Method | Path                                    | Module          |
|--------|------------------------------------------|-----------------|
| GET/PUT| `/profile/me`                             | Profile         |
| GET/POST | `/resumes`, `/resumes/analyze`          | Resume Studio   |
| GET    | `/resumes/{id}/analyses`                 | Resume Studio   |
| GET/POST | `/career-twin/conversations`, `.../messages` | Career Twin |
| GET    | `/jobs/listings`                          | Job Hub (public)|
| GET/POST/PATCH | `/jobs/matches*`                   | Job Hub         |
| GET/POST/PATCH | `/roadmap/*`                       | Roadmap         |
| GET/POST | `/interviews`, `/interviews/{id}/answers` | Mock Interview |
| GET    | `/analytics/summary`                     | Analytics       |
| GET/PATCH | `/notifications*`                     | Notifications   |
