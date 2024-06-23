from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import or_, update, delete, insert

from ..schemas import buyer_schema
from ..model import buyer_model

async def get_buyer_by_email(db: AsyncSession, email: str):
    response = await db.execute(
        select(buyer_model.Buyer).
        where(
            or_(buyer_model.Buyer.primary_email == email, buyer_model.Buyer.secondary_email == email)
        ) 
    )
    return response.scalars().first()

async def create_buyer(db: AsyncSession, buyer: buyer_model.Buyer):
    db.add(buyer)
    return buyer