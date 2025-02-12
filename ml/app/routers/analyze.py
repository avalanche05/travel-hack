from typing import List

from fastapi import APIRouter, Body, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, crud, serializers, models
from app.dependencies import get_db, current_user
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
def story_list(db: Session = Depends(get_db)) -> List[schemas.Story]:
    db_stories = crud.get_all_stories(db)

    return serializers.get_stories(db_stories)
