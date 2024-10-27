import uuid

from models.base import BaseModel
from sqlalchemy import Column, ForeignKey
from sqlalchemy import Column, String, ARRAY, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship


class TaskModel(BaseModel):
    __tablename__ = 'tasks'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True, nullable=False)
    question = Column(String(length=200), index=True, nullable=True)
    variants = Column(ARRAY(String(length=256)), index=True, nullable=False)
    correct = Column(Integer, primary_key=True)
    test_id = Column(UUID(as_uuid=True), ForeignKey('tests.id', ondelete='CASCADE'), nullable=False)
    test = relationship("TestModel", back_populates="tasks")

    test_id = Column(UUID(as_uuid=True), ForeignKey('tests.id', ondelete='CASCADE'), nullable=True)







