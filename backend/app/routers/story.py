from typing import List

from fastapi import APIRouter, Body, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, crud, serializers, models
from app.dependencies import get_db, current_user

story_router = APIRouter(
    prefix="/story",
    tags=["Story"],
)


@story_router.get(path="")
def story_list(db: Session = Depends(get_db)) -> List[schemas.Story]:
    db_stories = crud.get_all_stories(db)

    return serializers.get_stories(db_stories)
