"""
Job matching. `compute_match_score` is the seam for a real matching
algorithm (embedding similarity between resume/profile and job
description, weighted skill overlap, etc.).
"""


def compute_match_score(profile_skills: list[str], job_tags: list[str]) -> int:
    """
    Placeholder: simple overlap ratio. Replace with embedding-based
    similarity or a learned ranking model - keep returning an int 0-100.
    """
    if not job_tags:
        return 50

    overlap = len(set(s.lower() for s in profile_skills) & set(t.lower() for t in job_tags))
    ratio = overlap / len(job_tags)
    return min(99, 40 + round(ratio * 60))
