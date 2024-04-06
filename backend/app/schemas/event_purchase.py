from pydantic import BaseModel
from typing import Optional
from datetime import datetime

from app import schemas


class EventPurchase(BaseModel):
    user_id: int
    event: schemas.Event
    insurance_price: Optional[float] = None
    date: datetime
    is_visited: Optional[bool] = True


class EventPurchaseCreate(BaseModel):
    event_id: int
    insurance_price: Optional[float] = None


class EventPurchaseUpdate(BaseModel):
    event_id: Optional[int] = None
    insurance_price: Optional[float] = None
    is_visited: Optional[bool] = None
