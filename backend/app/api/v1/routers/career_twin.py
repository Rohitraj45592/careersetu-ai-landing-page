from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.api.v1.deps import CurrentUser, get_current_user, get_db
from app.models.career_twin import CareerTwinConversation, CareerTwinMessage
from app.schemas.career_twin import ConversationRead, MessageCreate, MessageRead
from app.services.career_twin_service import generate_reply

router = APIRouter(prefix="/career-twin", tags=["career-twin"])


@router.get("/conversations", response_model=list[ConversationRead])
def list_conversations(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.scalars(
        select(CareerTwinConversation)
        .where(CareerTwinConversation.user_id == user.id)
        .order_by(CareerTwinConversation.created_at.desc())
    ).all()


@router.post("/conversations", response_model=ConversationRead, status_code=status.HTTP_201_CREATED)
def create_conversation(user: CurrentUser = Depends(get_current_user), db: Session = Depends(get_db)):
    conversation = CareerTwinConversation(user_id=user.id)
    db.add(conversation)
    db.commit()
    db.refresh(conversation)
    return conversation


@router.post("/conversations/{conversation_id}/messages", response_model=MessageRead)
def send_message(
    conversation_id: str,
    payload: MessageCreate,
    user: CurrentUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    conversation = db.scalar(
        select(CareerTwinConversation).where(
            CareerTwinConversation.id == conversation_id,
            CareerTwinConversation.user_id == user.id,
        )
    )
    if conversation is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Conversation not found")

    user_message = CareerTwinMessage(conversation_id=conversation.id, role="user", content=payload.content)
    db.add(user_message)
    db.commit()

    history = [{"role": m.role, "content": m.content} for m in conversation.messages]
    reply_text = generate_reply(history, payload.content)

    assistant_message = CareerTwinMessage(
        conversation_id=conversation.id, role="assistant", content=reply_text
    )
    db.add(assistant_message)
    db.commit()
    db.refresh(assistant_message)
    return assistant_message
