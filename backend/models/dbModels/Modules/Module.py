import uuid

from models.base import BaseModel
from sqlalchemy import Column, UUID, String, ForeignKey
from sqlalchemy.orm import relationship, Mapped


class ModuleModel(BaseModel):
    __tablename__ = 'modules'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True, nullable=False)
    name = Column(String(length=50), index=True, nullable=False)
    theory = Column(String(length=50000), index=True, nullable=False)

    test_id = Column(UUID(as_uuid=True), ForeignKey('tests.id'), unique=True)
    test = relationship("TestModel", back_populates="module", uselist=False)
