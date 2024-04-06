from sqlalchemy import Column, Integer, Float, DateTime, Boolean, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db import BaseSqlModel


class EventPurchase(BaseSqlModel):
    __tablename__ = "event_purchases"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    event_id = Column(Integer, ForeignKey("events.id"), nullable=False)
    insurance_price = Column(Float, nullable=True)
    is_visited = Column(Boolean, default=True)

    user = relationship("User", back_populates="event_purchases")
    event = relationship("Event", back_populates="event_purchases")
