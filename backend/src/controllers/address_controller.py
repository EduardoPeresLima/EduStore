from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status

from ..repository import address_repository
from ..schemas import address_schema
from ..model import address_model


# CREATE operations
async def create_address(db: AsyncSession, address_request: address_schema.AddressCreate):
    try:
        address = address_model.Address(**address_request.__dict__)
        db_address = await address_repository.create_address(db, address)

        await db.commit()
    
    except Exception as ex:
        await db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Server Error")
