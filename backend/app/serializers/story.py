from typing import List

from app import models, schemas


def get_story(db_story: models.Story) -> schemas.Story:
    story = schemas.Story(
        id=db_story.id,
        title=db_story.title,
        s3path=db_story.s3path,
    )
    return story


def get_stories(db_stories: List[models.Story]) -> List[schemas.Story]:
    stories = [get_story(db_story) for db_story in db_stories]
    return stories
