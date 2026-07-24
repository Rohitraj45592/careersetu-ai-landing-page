"""
Personalized roadmap generation. `generate_milestones` is the seam for
a real model-driven planner (given target role + current profile/skill
gaps, produce an ordered curriculum).
"""

_DEFAULT_TEMPLATE = [
    ("Strengthen fundamentals", "Close core CS gaps identified from your profile."),
    ("Build a portfolio project", "Ship one project that directly targets your weakest skill area."),
    ("Practice DSA consistently", "Daily problems, spaced by topic, building toward interview pace."),
    ("Mock interviews", "Simulate real rounds and iterate on feedback."),
    ("Apply & network", "Start applying while continuing to sharpen weak spots."),
]


def generate_milestones(target_role: str) -> list[dict]:
    """
    Placeholder: a fixed template. Replace with a model call that takes
    the user's profile/skills/resume analysis into account and returns
    a role-specific ordered list. Keep the return shape
    (list of {title, description}) the same.
    """
    return [
        {"title": title, "description": f"{description} (for {target_role})"}
        for title, description in _DEFAULT_TEMPLATE
    ]
