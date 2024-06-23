from pydantic import BaseModel, Field
from typing import Optional

class AddressCreate(BaseModel):
    buyer_id: int = Field(gt=0)
    postal_code: str = Field(min_length=1)
    country: str = Field(min_length=1)
    state: str = Field(min_length=1)
    city: str = Field(min_length=1)
    street: str = Field(min_length=1)
    residence_number: str = Field(min_length=1)
    is_default: bool
    class Config:
        schema_extra = {
            'example':{
                'buyer_id': 1,
                'postal_code': 10005,
                'country': 'US',
                'state': 'New York',
                'city': 'New York',
                'street': 'idk',
                'residence_number': '123',
                'is_default': False
            }
        }
class Address(BaseModel):
    buyer_id: int = Field(gt=0)
    postal_code: str = Field(min_length=1)
    country: str = Field(min_length=1)
    state: str = Field(min_length=1)
    city: str = Field(min_length=1)
    street: str = Field(min_length=1)
    residency_number: str = Field(min_length=1)
    is_default: bool
    
    class Config:
        orm_mode = True