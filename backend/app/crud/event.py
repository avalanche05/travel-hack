from typing import List

from sqlalchemy.orm import Session, Mapper
from app import models, schemas


def get_all_events(db: Session) -> List[models.Event]:
    events = db.query(models.Event).all()

    return events


def get_event_by_event_id(db: Session, event_id: int) -> models.Event:
    event = db.query(models.Event).filter(models.Event.id == event_id).first()

    return event
