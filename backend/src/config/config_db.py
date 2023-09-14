from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from ..middleware.utils_environment import get_environment_config

config = get_environment_config()


DATABASE_DIALECT = 'mysql+aiomysql'
DATABASE_USER = 'root'
DATABASE_PASSWORD = config.get('DATABASE_PASSWORD')
DATABASE_HOST = config.get('DATABASE_HOST')
DATABASE = 'ihr-se'

ECHO = False if config.get('ECHO', "False") == 'False' else True


DATABASE_URL = \
    f'{DATABASE_DIALECT}://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE}'
 

engine = create_async_engine(DATABASE_URL, echo=ECHO)
async_session  = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

origins = [
    "*" # Temporary. Just to Test the frontend
]


Base = declarative_base()