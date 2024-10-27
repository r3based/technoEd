from pydantic import BaseModel
import datetime



class UserDTO(BaseModel):
    name: str
    surname: str
    email: str
    password: str
    phone: str

