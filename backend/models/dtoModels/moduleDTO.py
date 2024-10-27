from pydantic import BaseModel



class ModuleDTO(BaseModel):
    name: str
    theory: str

