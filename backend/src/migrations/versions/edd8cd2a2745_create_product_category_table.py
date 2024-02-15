"""Create 'product_category' table

Revision ID: edd8cd2a2745
Revises: e8815dc51ffb
Create Date: 2024-02-15 09:25:39.412362

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'edd8cd2a2745'
down_revision: Union[str, None] = 'e8815dc51ffb'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
