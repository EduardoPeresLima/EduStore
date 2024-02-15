"""Create 'wishlist' table

Revision ID: 063349dc06d9
Revises: 38f83bcc03fc
Create Date: 2024-02-15 09:26:06.864836

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '063349dc06d9'
down_revision: Union[str, None] = '38f83bcc03fc'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
