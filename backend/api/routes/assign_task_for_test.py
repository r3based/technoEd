from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from db.session import fastapi_get_db
from models.dbModels.Test.crud import assign_task_for_test

router = APIRouter()


@router.post("/assign_task_for_test/{test_id}", status_code=200)
async def assign_task_for_test_endpoint(test_id: UUID, task_id: UUID, db: AsyncSession = Depends(fastapi_get_db)):
    try:
        response = await assign_task_for_test(db, test_id, task_id)
        return response

    except HTTPException as http_ex:
        raise http_ex

    except Exception as e:
        print(f"Error while creating task: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")
