from datetime import timedelta, datetime
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException
from starlette import status

#JWT data
SECRET_KEY = 'a secret ket for my nice project with numbers 12412123 and CapYT@Lized L&TTERS'
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 30

#Talvez alterar o tokenUrl para 'auth/token' ou 'buyer/token'
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='/auth/login')

def create_access_token(user_email: str, user_id: int, role: str):
    expires_delta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    expires = datetime.utcnow() + expires_delta

    jwt_data = {'sub':user_email, 'id':user_id, 'role': role, 'exp': expires}
    return jwt.encode(jwt_data, SECRET_KEY, ALGORITHM)

async def get_current_user(token: str = Depends(oauth2_bearer)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_email: str = payload.get('sub')
        user_id: int = payload.get('id')
        user_role: str = payload.get('role')
        if user_email is None or user_id is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Could not validade credentials')
        return {'user_email': user_email,'user_id': user_id, 'user_role': user_role}
    except JWTError :
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Could not validade credentials')

