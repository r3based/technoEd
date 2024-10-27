from models.base import BaseModel
import uuid
from sqlalchemy import Column, UUID, String
from sqlalchemy.orm import relationship


class TestModel(BaseModel):
    __tablename__ = 'tests'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True, nullable=False)
    description = Column(String(length=200), index=True, nullable=True)

    module = relationship("ModuleModel", back_populates="test", uselist=False)
    tasks = relationship("TaskModel", back_populates="test", cascade="all, delete-orphan")