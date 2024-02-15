"""Create 'payment' table

Revision ID: 9c9abd2e5c87
Revises: edd8cd2a2745
Create Date: 2024-02-15 09:25:46.975340

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9c9abd2e5c87'
down_revision: Union[str, None] = 'edd8cd2a2745'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
