from pydantic import BaseModel


class Option(BaseModel):
    id: int
    label: str


class Step(BaseModel):
    id: int
    title: str
    image: str
    is_quiz: bool
    options: list[Option]


class Story(BaseModel):
    id: int
    steps: list[Step]
