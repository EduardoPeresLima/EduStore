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

table_name = 'order'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Order's Identifier"),
        sa.Column('buyer_id', sa.Integer, sa.ForeignKey('buyer.id'), nullable=False, comment="Buyer owner of this order"),
        sa.Column('created_at', sa.DateTime, nullable=False, comment="The creation time of the order"),
        sa.Column('updated_at', sa.DateTime, nullable=False, comment="The last update time of the order"),
        comment="Store the buyer's orders"
    )

def downgrade() -> None:
    op.drop_table(table_name)