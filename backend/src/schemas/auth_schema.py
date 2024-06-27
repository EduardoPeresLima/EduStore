from pydantic import BaseModel

    
class UserData(BaseModel):
    user_id: int
    username: str
    role: str
class Token(BaseModel):
    access_token: str
    token_type: str
    user_data: UserData