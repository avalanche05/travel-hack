from app import schemas
from app import models
from .event import get_event


def get_event_purchase(db_event_purchase: models.EventPurchase) -> schemas.EventPurchase:
    return schemas.EventPurchase(
        user_id=db_event_purchase.user.id,
        event=get_event(db_event_purchase.event),
        insurance_price=db_event_purchase.insurance_price,
        date=db_event_purchase.created_at,
        is_visited=db_event_purchase.is_visited,
    )


def get_event_purchases(db_event_purchases: list[models.EventPurchase]) -> list[schemas.EventPurchase]:
    return [get_event_purchase(db_event_purchase) for db_event_purchase in db_event_purchases]
