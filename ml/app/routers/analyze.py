from typing import List

from fastapi import APIRouter, Body, Depends, HTTPException

from pydantic import BaseModel

story_router = APIRouter(
    prefix="/analyze",
    tags=["Analyze"],
)


class AnalyzeInput(BaseModel):
    text: str


class AnalyzeOutput(BaseModel):
    type: str


@story_router.post(path="/")
def analyze_result():
    return []
