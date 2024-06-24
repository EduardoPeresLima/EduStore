from sqlalchemy import Column, Integer, String, ForeignKey, Boolean

from ..config.config_db import Base


class Address(Base):
    __tablename__ = "address"
    # __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    buyer_id = Column(Integer, ForeignKey('buyer.id'))
    postal_code = Column(String(9))
    country = Column(String(100))
    state = Column(String(100))
    city = Column(String(100))
    street = Column(String(100))
    residence_number = Column(String(100))
    is_default = Column(Boolean)