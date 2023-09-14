from ast import Str
from ..config.config_db import async_session
from sqlalchemy.ext.asyncio import AsyncSession
from ..config.config_db import DATABASE, engine

# Dependency
async def get_session() -> AsyncSession:
    """ Open the database connection and return an AsyncSession """
    async with async_session() as session:
        yield session

async def get_next_id(db: AsyncSession, tableName: Str):
    """ 
    Get the next increment id of a specific table in the database.
    Necessary because when a user is created, the id is generated only after commit()
    """
    database = DATABASE if db.bind == engine else f"test{DATABASE}"
    sql = f"SELECT AUTO_INCREMENT FROM information_schema.tables WHERE table_name = '{tableName}' AND table_schema = '{database}'"
    sqlresponse = await db.execute(sql)
    newId = dict(sqlresponse.first())['AUTO_INCREMENT']
    
    return newId