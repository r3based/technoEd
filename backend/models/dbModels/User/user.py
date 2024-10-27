import uuid
from typing import List

from sqlalchemy import Column, String, Date, Enum as SQLAEnum, Float, JSON
from sqlalchemy.dialects.postgresql import UUID
from enum import Enum
from passlib.context import CryptContext
from sqlalchemy.orm import relationship, Mapped

from models.base import BaseModel

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# Enum for user roles
class RoleEnum(str, Enum):
    HR = "hr"
    EMPLOYEE = "employee"


class UserModel(BaseModel):
    __tablename__ = 'users'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True, nullable=False)
    name = Column(String(length=50), index=True, nullable=False)
    surname = Column(String(length=50), index=True, nullable=True)
    phone = Column(String(length=15), index=True, nullable=True)
    email = Column(String(length=50), index=True, nullable=False)
    password = Column(String(length=100), nullable=False)
    role = Column(SQLAEnum(RoleEnum), default=RoleEnum.EMPLOYEE, nullable=False)
    personality = Column(JSON, default="")
    result = Column(Float, default=0, nullable=True)


    def set_password(self, password: str):
        self.password = pwd_context.hash(password)

    def verify_password(self, password: str) -> bool:
        return pwd_context.verify(password, self.password)

    def __repr__(self) -> str:
        return f"User(id={self.id!r}, role={self.role!r}, result={self.result!r})"

