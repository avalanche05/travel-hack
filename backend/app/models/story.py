from sqlalchemy import Column, Integer, JSON, Boolean, ForeignKey, String
from sqlalchemy.orm import relationship, Mapped, mapped_column
from app.db import BaseSqlModel


class Story(BaseSqlModel):
    __tabletame__ = "stories"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    s3path: Mapped[str] = mapped_column(String, nullable=False)

