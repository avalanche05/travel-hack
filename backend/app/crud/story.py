from datetime import datetime
from typing import List

from sqlalchemy.orm import Session, Mapper
from app import models, schemas


def get_all_stories(db: Session):
    trades = db.query(models.Story).all()
    return trades