from typing import List

from fastapi import APIRouter, Body, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, crud, serializers, models
from app.dependencies import get_db, current_user

event_router = APIRouter(
    prefix="/event",
    tags=["Event"],
)


@event_router.get(path="/")
def event_list(db: Session = Depends(get_db)) -> List[schemas.Event]:
    db_events = crud.get_all_events(db)

    return serializers.get_events(db_events)


@event_router.get(path="/{event_id}")
def get_event_by_event_id(event_id: int,
                          db: Session = Depends(get_db)
                          ) -> schemas.Event:
    db_event_by_event_id = crud.get_event_by_event_id(db, event_id)

    return serializers.get_event(db_event_by_event_id)
