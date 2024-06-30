from fastapi import APIRouter, Depends, Path, Query
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from ..middleware.utils_db import get_session
from ..middleware.auth import get_current_user
from ..controllers import product_controller

router = APIRouter(tags=["product"], prefix="/product")


@router.get("/", status_code=status.HTTP_200_OK)
async def get_all_products(
    db: AsyncSession = Depends(get_session)
):
    return await product_controller.get_all_products(db)

@router.get("/sale", status_code=status.HTTP_200_OK)
async def get_sale(
    limit: int = Query(gt=0, example=5),
    db: AsyncSession = Depends(get_session)
):
    return await product_controller.get_sale_products(limit, db)

@router.get("/by_id/{id}", status_code=status.HTTP_200_OK)
async def get_product_by_id(
    id: int = Path(gt=0, example=1),
    db: AsyncSession = Depends(get_session)
):
    return await product_controller.get_product_by_id(id, db)
