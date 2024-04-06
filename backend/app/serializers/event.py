from typing import List

from app import models, schemas


def get_event(db_event: models.Event) -> schemas.Event:
    return schemas.Event(
        id=db_event.id,
        title=db_event.title,
        description=db_event.description,
        price=db_event.price,
        has_insurance=db_event.has_insurance,
        date=db_event.created_at,
        image=db_event.image,
    )


def get_events(db_events: List[models.Event]) -> List[schemas.Event]:
    return [get_event(db_event) for db_event in db_events]
