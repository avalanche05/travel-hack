from sqlalchemy import Column, Integer, JSON, Boolean, ForeignKey, String
from sqlalchemy.orm import relationship, Mapped, mapped_column
from app.db import BaseSqlModel


class Story(BaseSqlModel):
    __tablename__ = "stories"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    steps = relationship("Step", back_populates="story")


class Step(BaseSqlModel):
    __tablename__ = "steps"

    id = Column(Integer, primary_key=True, autoincrement=True)
    image = Column(String)
    is_quiz = Column(Boolean, nullable=False)
    story_id = Column(Integer, ForeignKey("stories.id"))

    story = relationship("Story", back_populates="steps")
    options = relationship("Option", back_populates="step")


class Option(BaseSqlModel):
    __tablename__ = "options"

    id = Column(Integer, primary_key=True, autoincrement=True)
    label = Column(String)
    step_id = Column(Integer, ForeignKey("steps.id"))

    step = relationship("Step", back_populates="options")
