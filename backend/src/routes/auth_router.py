from fastapi import APIRouter, Depends, Path, Query, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status
from passlib.context import CryptContext

from ..middleware.utils_db import get_session
from ..schemas import auth_schema, buyer_schema, address_schema
from ..repository import buyer_repository
from ..middleware import auth
from ..controllers import buyer_controller

router = APIRouter(tags=["auth"], prefix='/auth')
bcrypt_context = CryptContext(schemes=['bcrypt'])

@router.post('/login', response_model=auth_schema.Token)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: AsyncSession = Depends(get_session)
):
    buyer = await authenticate_buyer(form_data.username, form_data.password, db)
    if not buyer:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Could not validade credentials')
    token = auth.create_access_token(buyer.primary_email, buyer.id, role='buyer')
    return {
        'access_token': token,
        'token_type': 'bearer'
    }

@router.post("/buyer", status_code=status.HTTP_201_CREATED)
async def create_buyer(
    buyer: buyer_schema.BuyerCreate, 
    db: AsyncSession = Depends(get_session)
):
    return await buyer_controller.create_buyer(db, buyer)

@router.post("/buyer_with_address", status_code=status.HTTP_201_CREATED)
async def create_buyer_with_address(
    buyer: buyer_schema.BuyerCreate, 
    address: address_schema.AddressCreateWithBuyer,
    db: AsyncSession = Depends(get_session)
):
    return await buyer_controller.create_buyer_with_address(db, buyer, address)

async def authenticate_buyer(buyer_email:str, buyer_password:str, db: AsyncSession):
    db_buyer = await buyer_repository.get_buyer_by_email(db, buyer_email)
    if not db_buyer:
        return False
    if not bcrypt_context.verify(buyer_password, db_buyer.password):
        return False
    return db_buyer
