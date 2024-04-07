from fastapi import APIRouter, Body, Depends, HTTPException

from pydantic import BaseModel
from ml.app.utils.transformer import TransformerModel

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
    model = TransformerModel()
    result = model.predict_description_from_description(hint_input.text)
    return HintOutput(text=result)
