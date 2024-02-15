"""Create 'category' table

Revision ID: e8815dc51ffb
Revises: 04ad120dc8fc
Create Date: 2024-02-15 09:25:30.311226

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e8815dc51ffb'
down_revision: Union[str, None] = '04ad120dc8fc'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

table_name = 'category'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Category's Identifier"),
        sa.Column('name', sa.String(50), nullable=False, comment="Category's Name"),
        comment="Products categories types"

    )
def downgrade() -> None:
    op.drop_table(table_name)