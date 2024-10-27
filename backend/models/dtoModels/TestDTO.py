from pydantic import BaseModel


class TestDTO(BaseModel):
    description: str
