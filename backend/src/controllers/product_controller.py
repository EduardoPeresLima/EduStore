from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status

from ..repository import product_repository
from ..model import product_model


# CREATE operations
async def get_all_products(db: AsyncSession):
    try:
        response = await product_repository.get_all_products(db)
        for item in response:
            item.image = 'data:image/jpg; base64,' + item.image
            # item.image = "https://primefaces.org/cdn/primeng/images/demo/product/chakra-bracelet.jpg"
        return response
    
    except Exception as ex:
        print(ex)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Server Error")
