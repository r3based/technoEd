import uuid
from pydantic import BaseModel
from .task import TaskModel
from ...dtoModels.TaskDTO import TaskDTO
from sqlalchemy.ext.asyncio import AsyncSession

class TaskResponseBasic(BaseModel):
    id: uuid.UUID
    question: str
    variants: list
    correct: int

class TaskResponse(BaseModel):
    id: uuid.UUID
    question: str

async def create_task(db: AsyncSession, task: TaskDTO):
    db_task = TaskModel(
        question = task.question,
        variants = task.variant,
        correct = task.correct
    )
    db.add(db_task)
    await db.commit()
    return TaskResponse(id=db_task.id, question=db_task.question)
