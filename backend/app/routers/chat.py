import json

from fastapi import APIRouter, Body, Depends, HTTPException
import requests

from pydantic import BaseModel

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
    result = requests.post("http://51.81.223.243:8000/chat/", json={"text": chat_input.text})
    return ChatOutput(text=json.loads(result.text).get("text"))
