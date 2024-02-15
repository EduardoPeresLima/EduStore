"""Create 'order_product' table

Revision ID: 04ad120dc8fc
Revises: 09ebfbae3d44
Create Date: 2024-02-15 09:25:15.537727

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '04ad120dc8fc'
down_revision: Union[str, None] = '09ebfbae3d44'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
