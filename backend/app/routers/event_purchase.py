from typing import List

from fastapi import APIRouter, Body, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, crud, serializers, models
from app.dependencies import get_db, current_user

event_purchase_router = APIRouter(
    prefix="/event_purchase",
    tags=["EventPurchase"],
)


@event_purchase_router.get(path="/")
def event_purchase_list(db: Session = Depends(get_db)) -> list[schemas.EventPurchase]:
    db_event_purchases = crud.get_all_event_purchases(db)

    return serializers.get_event_purchases(db_event_purchases)


@event_purchase_router.get(path="/{event_purchase_id}")
def get_event_purchase_by_id(event_purchase_id: int,
                             db: Session = Depends(get_db)
                             ) -> schemas.EventPurchase:
    db_event_purchase = crud.get_event_purchase_by_id(db, event_purchase_id)

    return serializers.get_event_purchase(db_event_purchase)


@event_purchase_router.post(path="/")
def create_event_purchase(event_purchase_create: schemas.EventPurchaseCreate,
                          db: Session = Depends(get_db),
                          user: models.User = Depends(current_user)) -> schemas.EventPurchase:
    db_event_purchase = crud.create_event_purchase(db, event_purchase_create, user.id)

    return serializers.get_event_purchase(db_event_purchase)


@event_purchase_router.put(path="/{event_purchase_id}")
def update_event_purchase(event_purchase_id: int,
                          event_purchase_update: schemas.EventPurchaseUpdate,
                          db: Session = Depends(get_db)) -> schemas.EventPurchase:
    db_event_purchase = crud.update_event_purchase(db, event_purchase_id, event_purchase_update)

    return serializers.get_event_purchase(db_event_purchase)
