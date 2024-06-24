from pydantic import BaseModel, Field
from typing import Optional

class BuyerCreate(BaseModel):
    name: str = Field(min_length=1, max_length=50)
    primary_email: str = Field(max_length=320)
    password: str = Field(min_length=8, max_length=50)
    primary_phone_number: str = Field(max_length=50)
    class Config:
        schema_extra = {
            'example':{
                'name': 'An user name',
                'primary_email': 'user@email.com',
                'password': 'pass1234',
                'primary_phone_number': '99912345678',
            }
        }

class Buyer(BaseModel):
    id: int
    name: str
    primary_email: str
    primary_phone_number: str
    secondary_phone_number: Optional[str] = None
    secondary_email: Optional[str] = None
    
    class Config:
        orm_mode = True