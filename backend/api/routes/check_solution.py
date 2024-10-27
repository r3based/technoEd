from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from models.dbModels.Task.get_procent_of_coolness import check_tasks
from sqlalchemy.ext.asyncio import AsyncSession
from db.session import fastapi_get_db
from models.dbModels.User.crud import get_user_by_id_full


router = APIRouter()

@router.post("/check_solution")
async def create_module_endpoint(userId: UUID, answers: list[str], db: AsyncSession = Depends(fastapi_get_db)):
    try:
        result = check_tasks(answers)
        user = await get_user_by_id_full(db, userId)
        user.personality = result
        await db.commit()
        await db.refresh(user)
        return {"result": result}
    except HTTPException as http_ex:
        raise http_ex

    except Exception as e:
        print(f"Error while creating user: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

