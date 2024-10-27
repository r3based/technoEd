from pydantic import BaseModel


class TaskDTO(BaseModel):
    question: str
    variant: list
    correct: int





