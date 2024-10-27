from fastapi import APIRouter, HTTPException
from models.dbModels.Task.get_procent_of_coolness import tasks

router = APIRouter()

@router.get("/get_open_tasks")
async def get_open_tasks():
    try:
        return tasks
    except HTTPException as http_ex:
        raise http_ex

    except Exception as e:
        print(f"Error while creating user: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

