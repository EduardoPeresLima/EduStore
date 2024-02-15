"""Create 'address' table

Revision ID: b5d5375e95ae
Revises: 9c9abd2e5c87
Create Date: 2024-02-15 09:25:52.138914

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b5d5375e95ae'
down_revision: Union[str, None] = '9c9abd2e5c87'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
