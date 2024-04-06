from pydantic import BaseModel


class Story(BaseModel):
    id: int
    title: str
    s3path: str
