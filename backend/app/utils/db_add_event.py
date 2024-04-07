import json
from sqlalchemy.orm import Session, Mapper

from app import models, schemas
from app.dependencies import get_db


def event_create(event: dict, db: Session):
    db_event = models.Event(
        title=event["title"],
        description=event["description"],
        price=event["price"],
        has_insurance=event["has_insurance"],
        image=event["image"],
    )
    db.add(db_event)
    db.commit()


if __name__ == "__main__":
    db = next(get_db())
    with open("app/utils/presigned_event.json", "r") as f:
        event_k = json.load(f)
        for event in event_k.get("result"):
            print(event)
            event_create(event, db)






