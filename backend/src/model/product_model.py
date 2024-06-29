from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.dialects.mysql import LONGTEXT

from ..config.config_db import Base


class Product(Base):
    __tablename__ = "product"
    # __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    seller_id = Column(String(50))
    name = Column(String(60))
    description = Column(String(320))
    quantity_in_stock = Column(String(320))
    price_cents = Column(String(20))
    currency = Column(String(20))
    image = Column(LONGTEXT)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)