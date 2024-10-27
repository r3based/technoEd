from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from models.dbModels.Test.test import TestModel
from models.dbModels.Test.crud import create_test, TestResponse
from db.session import fastapi_get_db
from models.dtoModels.TestDTO import TestDTO


router = APIRouter()


@router.post("/createTest", response_model=TestResponse)
async def create_task_endpoint(test: TestDTO, db: AsyncSession = Depends(fastapi_get_db)):
    try:
        db_test = await create_test(db, test)
        return db_test
    except HTTPException as http_ex:
        raise http_ex

    except Exception as e:
        print(f"Error while creating task: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

