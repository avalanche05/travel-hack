from sqlalchemy.orm import Session, Mapper
from app import models, schemas
from fastapi import Depends

from app.dependencies import get_db
from app.utils.event import event_dict


def event_create(event: dict, db: Session = Depends(get_db)):
    db_event = models.Event(
        title=event["title"],
        description=event["description"],
        price=event["price"],
        has_insurance=event["has_insurance"],
        image=event["image"],
    )
    db.add(db_event)
    db.commit()


def events_create(db: Session = Depends(get_db)):
    for event in event_dict.get("k"):
        event_create(event, db)


if __name__ == "__main__":
    event_create(event_dict)


