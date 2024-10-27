from pydantic import BaseModel
from sqlalchemy import select

from .test import TestModel
from ...dbModels.Task.task import TaskModel
import uuid
from sqlalchemy.ext.asyncio import AsyncSession
from ...dtoModels.TestDTO import TestDTO


class TestResponseBasic(BaseModel):
    id: uuid.UUID
    description: str

class TestResponse(BaseModel):
    id: uuid.UUID
    description: str


async def create_test(db: AsyncSession, test: TestDTO):
    db_test = TestModel(
        description=test.description
    )
    db.add(db_test)
    await db.commit()
    await db.refresh(db_test)
    return TestResponse(id=db_test.id, description=db_test.description)


async def get_all_task_for_test(db: AsyncSession, test_id: uuid.UUID):
    result = await db.execute(select(TaskModel).where(TaskModel.test_id == test_id))
    tasks = result.scalars().all()
    return tasks


async def assign_task_for_test(db: AsyncSession, test_id: uuid.UUID, task_id: uuid.UUID):
    result = await db.execute(select(TaskModel).where(TaskModel.id == task_id))
    task = result.scalar_one_or_none()
    task.test_id = test_id
    db.add(task)
    await db.commit()
    return task


