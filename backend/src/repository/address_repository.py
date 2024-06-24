from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import or_, update, delete, insert

from ..model import address_model

async def get_address_by_buyer_id(db: AsyncSession, buyer_id: int):
    response = await db.execute(
        select(address_model.Address).
        where(
            address_model.Address.buyer_id == buyer_id
        )
    )
    return response.scalars().first()

async def create_address(db: AsyncSession, address: address_model.Address):
    db.add(address)
    return address