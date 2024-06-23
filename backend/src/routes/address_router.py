from fastapi import APIRouter, Depends, Path, Query
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from ..middleware.utils_db import get_session
from ..schemas import address_schema
from ..controllers import address_controller

router = APIRouter(tags=["address"], prefix="/address")


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_address(
    address: address_schema.AddressCreate, 
    db: AsyncSession = Depends(get_session)
):
    return await address_controller.create_address(db, address)