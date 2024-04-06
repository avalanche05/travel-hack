from sqlalchemy.orm import Session
from app import models, schemas
from datetime import datetime


def create_event_purchase(db: Session, event_purchase: schemas.EventPurchaseCreate):
    db_event_purchase = models.EventPurchase(**event_purchase.dict())
    db.add(db_event_purchase)
    db.commit()
    db.refresh(db_event_purchase)
    return db_event_purchase


def get_all_event_purchases(db: Session) -> list[models.EventPurchase]:
    return db.query(models.EventPurchase).all()


def get_event_purchase_by_id(db: Session, event_purchase_id: int) -> models.EventPurchase:
    return db.query(models.EventPurchase).filter(models.EventPurchase.id == event_purchase_id).first()


def update_event_purchase(db: Session, event_purchase_id: int, event_purchase: schemas.EventPurchaseUpdate):
    db_event_purchase = db.query(models.EventPurchase).filter(models.EventPurchase.id == event_purchase_id).first()
    if db_event_purchase:
        for key, value in event_purchase.dict().items():
            if value is not None:
                setattr(db_event_purchase, key, value)
        db.commit()
        db.refresh(db_event_purchase)
    return db_event_purchase
