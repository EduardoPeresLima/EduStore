from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import or_, update, delete, insert

from ..model import product_model

async def get_all_products(db: AsyncSession):
    response = await db.execute(
        select(product_model.Product)
    )
    return response.scalars().all()

async def get_product_by_id(product_id: int, db: AsyncSession):
    response = await db.execute(
        select(product_model.Product).
        where(product_model.Product.id == product_id)
    )
    return response.scalars().first()