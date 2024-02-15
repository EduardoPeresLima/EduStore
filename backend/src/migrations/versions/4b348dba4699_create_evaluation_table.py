"""Create 'evaluation' table

Revision ID: 4b348dba4699
Revises: 063349dc06d9
Create Date: 2024-02-15 09:26:34.824010

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '4b348dba4699'
down_revision: Union[str, None] = '063349dc06d9'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
