from typing import AsyncGenerator
from ..config.config_db import async_session

# Dependency
async def get_session() -> AsyncGenerator:
    """ Open the database connection and return an AsyncSession """
    async with async_session() as session:
        yield session
