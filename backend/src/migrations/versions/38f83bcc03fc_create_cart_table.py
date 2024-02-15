"""Create 'cart' table

Revision ID: 38f83bcc03fc
Revises: b5d5375e95ae
Create Date: 2024-02-15 09:25:59.656683

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '38f83bcc03fc'
down_revision: Union[str, None] = 'b5d5375e95ae'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
