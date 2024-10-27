from fastapi import APIRouter, Depends, HTTPException
from models.dtoModels.moduleDTO import ModuleDTO
from models.dbModels.Modules.crud import CourseResponse, create_module
from sqlalchemy.ext.asyncio import AsyncSession
from db.session import fastapi_get_db

router = APIRouter()

@router.post("/createCourse", response_model=CourseResponse)
async def create_module_endpoint(module: ModuleDTO, db: AsyncSession = Depends(fastapi_get_db)):
    try:
        db_module = await create_module(db, module)
        return db_module
    except HTTPException as http_ex:
        raise http_ex

    except Exception as e:
        print(f"Error while creating user: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

