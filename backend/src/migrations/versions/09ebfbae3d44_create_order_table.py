"""Create 'order' table

Revision ID: 09ebfbae3d44
Revises: d1098f5402c8
Create Date: 2024-02-15 09:24:59.100500

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '09ebfbae3d44'
down_revision: Union[str, None] = 'd1098f5402c8'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
