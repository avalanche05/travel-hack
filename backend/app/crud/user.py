from datetime import datetime
from typing import List

from sqlalchemy.orm import Session, Mapper
from app import models, schemas


def get_user(user_id: int, db: Session):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    return db_user
