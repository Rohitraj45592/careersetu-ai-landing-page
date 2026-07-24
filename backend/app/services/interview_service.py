"""
Mock interview question generation + answer evaluation. Both functions
are the seam for real model calls (question bank + LLM grading, or a
generative interviewer).
"""

_QUESTION_BANK = {
    "dsa": [
        "Explain the time complexity of your approach to reversing a linked list.",
        "How would you detect a cycle in a graph?",
    ],
    "system_design": [
        "Design a URL shortener that handles 10M requests/day.",
        "How would you scale a notification service?",
    ],
    "behavioral": [
        "Tell me about a time you disagreed with a teammate.",
        "Describe a project you're most proud of and why.",
    ],
    "hr": [
        "Why do you want to work here?",
        "Where do you see yourself in five years?",
    ],
}


def generate_questions(interview_type: str, count: int = 5) -> list[str]:
    """Replace with a real generator (LLM, adaptive difficulty, etc.)."""
    bank = _QUESTION_BANK.get(interview_type, _QUESTION_BANK["behavioral"])
    return (bank * ((count // len(bank)) + 1))[:count]


def evaluate_answer(question: str, answer: str) -> dict:
    """
    Placeholder scoring. Replace with a real LLM grading call that
    returns structured feedback. Keep the {feedback, score} shape.
    """
    score = min(95, 50 + len(answer.split()))
    return {
        "score": score,
        "feedback": "Solid structure. Add a concrete example to strengthen the answer.",
    }
