"""
AI Career Twin chat. `generate_reply` is the single seam for plugging
in a real LLM (with retrieval over the user's resume/profile/roadmap
for grounding). The router only ever calls this function.
"""


def generate_reply(conversation_history: list[dict], new_message: str) -> str:
    """
    Placeholder reply. Replace with a real LLM call, e.g.:

        response = llm_client.chat.completions.create(
            model="...",
            messages=[system_prompt(user), *conversation_history, {"role": "user", "content": new_message}],
        )
        return response.choices[0].message.content

    Keep the signature (history in, string out) the same and the
    router/persistence layer needs no changes.
    """
    return (
        "I've noted that. Based on what you've shared, I'd suggest focusing "
        "on one concrete project this week that demonstrates the skill gap "
        "we discussed. Want me to break that down into steps?"
    )
