from fastapi import APIRouter, Depends, HTTPException
from db.session import fastapi_get_db
from models.dbModels.Task.crud import TaskResponse, create_task
from sqlalchemy.ext.asyncio import AsyncSession
from models.dtoModels.TaskDTO import TaskDTO

router = APIRouter()

@router.post("/createTask", response_model=TaskResponse)
async def create_task_endpoint(task: TaskDTO, db: AsyncSession = Depends(fastapi_get_db)):
    try:
        db_task = await create_task(db, task)
        return db_task
    except HTTPException as http_ex:
        raise http_ex

    except Exception as e:
        print(f"Error while creating task: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")




