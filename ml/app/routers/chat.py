from fastapi import APIRouter, Body, Depends, HTTPException

from pydantic import BaseModel
from ml.app.utils.transformer import TransformerModel

chat_router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


class ChatInput(BaseModel):
    text: str


class ChatOutput(BaseModel):
    text: str


@chat_router.post(path="/")
def post_chat(chat_input: ChatInput) -> ChatOutput:
    model = TransformerModel()
    result = model.predict_chat(chat_input.text)
    return ChatOutput(text=result)
