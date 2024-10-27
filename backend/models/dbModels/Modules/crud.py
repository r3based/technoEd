import uuid

from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from .Module import ModuleModel
from ...dtoModels.moduleDTO import ModuleDTO
from ...dbModels.Test.test import TestModel

class CourseResponseBasic(BaseModel):
    id: uuid.UUID
    name: str
    theory: str

class CourseResponse(BaseModel):
    id: uuid.UUID
    name: str



async def create_module(db: AsyncSession, course: ModuleDTO):
    db_module = ModuleModel(
        name = course.name,
        theory = course.theory
    )
    db.add(db_module)
    await db.commit()
    return CourseResponse(id=db_module.id, name=db_module.name)


async def assign_test_module(db: AsyncSession, module_id: uuid.UUID, test_id: uuid.UUID):
    result_module = await db.execute(select(ModuleModel).where(ModuleModel.id == module_id))
    module = result_module.scalar_one_or_none()
    result_test = await db.execute(select(TestModel).where(TestModel.id == test_id))
    test = result_test.scalar_one_or_none()
    module.test_id = test_id
    db.add(module)
    await db.commit()
    return {"module_id": module.id, "test_id": test.id}