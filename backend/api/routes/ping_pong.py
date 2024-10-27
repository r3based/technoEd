from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from db.session import fastapi_get_db
from models.dbModels.User.user import UserModel

router = APIRouter()


@router.get("/ping")
async def ping():
    return {"detail": "OK"}


@router.get("/pong")
async def pong(db: AsyncSession = Depends(fastapi_get_db)):
    try:
        # Выполняем текстовый SQL запрос с использованием функции text
        result = await db.execute(text("SELECT 1"))
        if result:
            return {"detail": "OK"}
        else:
            raise HTTPException(status_code=500, detail="Failed to query the database")
    except Exception as e:
        print(f"Database error: {e}")
        raise HTTPException(status_code=500, detail="Database connection error")