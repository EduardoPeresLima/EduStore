from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status

from ..repository import product_repository
from ..model import product_model

async def get_all_products(db: AsyncSession):
    try:
        response = await product_repository.get_all_products(db)
        return response
    
    except Exception as ex:
        print(ex)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Server Error")

async def get_product_by_id(product_id: int, db: AsyncSession):
    try:
        response = await product_repository.get_product_by_id(product_id, db)
    
    except Exception as ex:
        print(ex)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Server Error")

    if response == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
    return response

async def get_sale_products(limit: int, db: AsyncSession):
    try:
        response = await product_repository.get_all_products(db)
        for item in response:
            item.old_price_cents = 15700
        return response[:limit]
    
    except Exception as ex:
        print(ex)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Server Error")