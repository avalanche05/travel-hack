from datetime import datetime
from pydantic import BaseModel


class Event(BaseModel):
    id: int
    title: str
    description: str
    price: float
    has_insurance: bool
    date: datetime
    image: str
