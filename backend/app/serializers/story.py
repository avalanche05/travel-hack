from typing import List

from app import models, schemas


def get_option(db_option: models.Option):
    return schemas.Option(
        id=db_option.id,
        label=db_option.label,
    )


def get_options(db_options: list[models.Option]):
    return [get_option(db_option) for db_option in db_options]


def get_step(db_step: models.Step):
    return schemas.Step(
        id=db_step.id,
        title=db_step.title,
        image=db_step.image,
        is_quiz=db_step.is_quiz,
        options=get_options(db_step.options),
    )


def get_steps(db_steps: list[models.Step]):
    return [get_step(db_step) for db_step in db_steps]


def get_story(db_story: models.Story) -> schemas.Story:
    story = schemas.Story(
        id=db_story.id,
        steps=get_steps(db_story.steps),
    )
    return story


def get_stories(db_stories: List[models.Story]) -> List[schemas.Story]:
    stories = [get_story(db_story) for db_story in db_stories]
    return stories
