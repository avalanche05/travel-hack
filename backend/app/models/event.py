from sqlalchemy import Column, Integer, JSON, Boolean, ForeignKey, String, Float, DateTime
from sqlalchemy.orm import relationship, Mapped, mapped_column
from app.db import BaseSqlModel


class Event(BaseSqlModel):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=True)
    has_insurance = Column(Boolean, nullable=False)
    image = Column(String, nullable=True)

    event_purchases = relationship("EventPurchase", back_populates="event")
