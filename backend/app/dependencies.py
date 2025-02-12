from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer
from sqlalchemy.orm import Session
from app import crud, models

from .db import SessionLocal

oauth2_scheme = HTTPBearer()


def get_db():
    with SessionLocal() as db:
        yield db


def current_user(
        db: Session = Depends(get_db),
        access_token: str = Depends(oauth2_scheme)) -> models.User:
    if not access_token:
        raise HTTPException(
            status_code=401,
            detail="Not authenticated",
        )

    return crud.get_user(int(access_token.credentials), db)
