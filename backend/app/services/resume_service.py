"""
Resume analysis / ATS scoring.

`analyze_resume_text` is the one function to swap out for a real model
(OpenAI/Claude call, a fine-tuned classifier, a rules engine, whatever)
later. Everything else in this module (persistence, the router) does
not need to change when that happens - it only depends on this
function's return shape.
"""

import random


def analyze_resume_text(resume_text: str, target_role: str | None = None) -> dict:
    """
    Placeholder scoring. Deterministic-ish (seeded by text length) so
    repeated calls during development don't produce wildly different
    numbers. Replace the body with a real LLM/ML call - keep the
    return shape the same and the router/model layer needs no changes.
    """
    seed = len(resume_text) or 1
    rng = random.Random(seed)

    return {
        "overall_score": rng.randint(65, 92),
        "ats_score": rng.randint(70, 95),
        "grammar_score": rng.randint(80, 99),
        "formatting_score": rng.randint(75, 98),
        "strengths": [
            "Clear, quantified project descriptions",
            "Consistent formatting throughout",
        ],
        "weaknesses": [
            "Summary section reads generically",
            "Missing metrics in the experience section",
        ],
        "suggestions": [
            "Add measurable impact (%, numbers) to each bullet",
            f"Tailor keywords toward '{target_role}'" if target_role else "Tailor keywords toward your target role",
        ],
        "keywords_found": ["Python", "React", "SQL"],
        "missing_keywords": ["Docker", "System Design", "AWS"],
    }
