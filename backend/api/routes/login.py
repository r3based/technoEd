from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Form

from .auth import authenticate_user_by_email, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES
from db.session import fastapi_get_db
from datetime import timedelta

router = APIRouter()


class OAuth2EmailRequestForm:
    def __init__(
        self,
        email: str = Form(...),  # Поле email, вместо username
        password: str = Form(...),
    ):
        self.email = email
        self.password = password


@router.post("/token")
async def login_for_access_token(form_data: OAuth2EmailRequestForm = Depends(), db: AsyncSession = Depends(fastapi_get_db)):
    # Аутентификация по email вместо username
    user = await authenticate_user_by_email(db, form_data.email, form_data.password)  # Измените функцию для работы с email
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires  # Используем email вместо username
    )
    return {"access_token": access_token, "token_type": "bearer"}


