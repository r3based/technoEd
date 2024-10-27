from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from models.base import BaseModel
from core.config import settings
from sqlalchemy.ext.asyncio import create_async_engine


async def init_db():
    engine = create_async_engine(str(settings.ASYNC_DATABASE_URI), echo=True)
    async with engine.begin() as conn:
        await conn.run_sync(BaseModel.metadata.create_all)
    await engine.dispose()
