from fastapi import APIRouter, Depends, Path, Query
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from ..middleware.utils_db import get_session
from ..schemas import buyer_schema
from ..controllers import buyer_controller
#Validation on Path
#Validation on Query
#Validation on Body, with schema

router = APIRouter(tags=["buyer"], prefix="/buyer")

@router.get("/",status_code=status.HTTP_200_OK, response_model=list[buyer_schema.Buyer])
async def get_all_buyers(
    db: AsyncSession = Depends(get_session)
):
    return await buyer_controller.get_all_buyers(db)

@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_buyer(
    buyer: buyer_schema.BuyerCreate, 
    db: AsyncSession = Depends(get_session)
):
    return await buyer_controller.create_buyer(db, buyer)

# @router.post("/buyer_with_address", status_code=status.HTTP_201_CREATED)
# async def create_buyer_with_address(
#     buyer: buyer_schema.BuyerCreate, 
#     db: AsyncSession = Depends(get_session)
# ):
    return await buyer_controller.create_buyer(db, buyer)

# @router.get("/{buyer_email}", response_model=buyer_schema.Buyer)
# async def get_buyer_by_email_path(buyer_email: str = Path(max_length=320)):
#     return None

# @router.get("/", response_model=buyer_schema.Buyer)
# async def get_buyer_by_email_query(buyer_email: str = Query(max_length=320)):
#     return None

#passlib
#bcrypt