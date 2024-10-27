        # https://stackoverflow.com/questions/75252097/fastapi-testing-runtimeerror-task-attached-to-a-different-loop/75444607#75444607
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from core import settings

from models.base import BaseModel

# DB_POOL_SIZE = 83
# WEB_CONCURRENCY = 9
# POOL_SIZE = max(DB_POOL_SIZE // WEB_CONCURRENCY, 5)

# connect_args = {"ch           eck_same_thread": False}


# Создание асинхронного двигателя
async_engine = create_async_engine(
    str(settings.ASYNC_DATABASE_URI),
    echo=True,  # Можно оставить True для отладки
    future=True,
)

# Создание асинхронного sessionmaker
async_session_maker = async_sessionmaker(
    bind=async_engine,
    expire_on_commit=False,
    autoflush=False,
)

# Создание таблиц
async def create_tables():
    async with async_engine.begin() as conn:
        await conn.run_sync(BaseModel.metadata.create_all)

async def fastapi_get_db():
    db = async_session_maker()
    try:
        yield db
    finally:
        await db.close()
