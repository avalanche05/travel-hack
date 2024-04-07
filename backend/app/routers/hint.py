import json

from fastapi import APIRouter, Body, Depends, HTTPException
import requests

from pydantic import BaseModel

hint_router = APIRouter(
    prefix="/hint",
    tags=["Hint"],
)


class HintInput(BaseModel):
    text: str


class HintOutput(BaseModel):
    text: str


@hint_router.post(path="/")
def post_chat(hint_input: HintInput) -> HintOutput:
    result = requests.post("http://51.81.223.243:8000/hint/", json={"text": hint_input.text})
    return HintOutput(text=json.loads(result.text).get("text"))


