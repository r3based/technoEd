import uuid

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from models.dbModels.User.user import RoleEnum
from models.dtoModels.userDTO import UserDTO
from models.dbModels.User.crud import create_user, get_user_by_email, get_user_by_id, assign_role
from models.dbModels.User.crud import UserBasicResponse, UserResponse
from models.dbModels.User.crud import get_all_users
from .auth import get_current_employer_user, get_current_user, get_current_owner_user
from db.session import fastapi_get_db

router = APIRouter()


@router.post("/register", response_model=UserResponse)
async def create_user_endpoint(user: UserDTO, db: AsyncSession = Depends(fastapi_get_db)):
    try:
        existing_user = await get_user_by_email(db, user.email)
        if existing_user is not None:
            raise HTTPException(status_code=403, detail="User with this email already exists")

        db_user = await create_user(db, user)
        return db_user

    except HTTPException as http_ex:
        raise http_ex

    except Exception as e:
        print(f"Error while creating user: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.get("/all")
async def get_users_endpoint(
    db: AsyncSession = Depends(fastapi_get_db),
    current_user: UserBasicResponse = Depends(get_current_employer_user),
):
    users = await get_all_users(db)
    return users


@router.get("/")
async def get_users_endpoint(
    db: AsyncSession = Depends(fastapi_get_db),
    current_user: UserBasicResponse = Depends(get_current_user),
):
    users = await get_user_by_id(db, current_user.id)
    return users


@router.post("/assign-role")
async def assign_role_endpoint(
    user_id: uuid.UUID,
    new_role: RoleEnum,
    db: AsyncSession = Depends(fastapi_get_db),
    current_user: UserBasicResponse = Depends(get_current_user)
):

    role = await assign_role(db, user_id, new_role)
    if role is None:
        raise HTTPException(status_code=500)

    return {"message": f"User role updated to {new_role}"}

