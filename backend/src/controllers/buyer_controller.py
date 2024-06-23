from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status
from passlib.context import CryptContext

from ..repository import buyer_repository
from ..schemas import buyer_schema
from ..model import buyer_model

bcrypt_context = CryptContext(schemes=['bcrypt'])

async def get_all_buyers(db: AsyncSession):
    try:
        return await buyer_repository.get_all_buyers(db)
    
    except Exception as ex:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Server Error")

# CREATE operations
async def create_buyer(db: AsyncSession, buyer_request: buyer_schema.BuyerCreate):
    db_buyer = await buyer_repository.get_buyer_by_email(db, buyer_request.primary_email)
    
    if db_buyer:
        raise HTTPException(status_code=409, detail="Email already registered")
    
    try:
        buyer = buyer_model.Buyer(
            name = buyer_request.name,
            password = bcrypt_context.hash(buyer_request.password),
            primary_email = buyer_request.primary_email,
            primary_phone_number = buyer_request.primary_phone_number
        )
        db_buyer = await buyer_repository.create_buyer(db, buyer)
        await db.commit()
    
    except Exception as ex:
        await db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Server Error")
