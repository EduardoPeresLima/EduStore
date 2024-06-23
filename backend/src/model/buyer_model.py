from sqlalchemy import Column, Integer, String

from ..config.config_db import Base


class Buyer(Base):
    __tablename__ = "buyer"
    # __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    password = Column(String(60))
    primary_email = Column(String(320))
    secondary_email = Column(String(320))
    primary_phone_number = Column(String(20))
    secondary_phone_number = Column(String(20))