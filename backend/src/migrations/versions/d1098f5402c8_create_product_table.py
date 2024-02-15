"""Create 'product' table

Revision ID: d1098f5402c8
Revises: 7262e7aaeee7
Create Date: 2024-02-15 09:24:52.350209

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = 'd1098f5402c8'
down_revision: Union[str, None] = '7262e7aaeee7'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

table_name = 'product'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Product's Identifier"),
        sa.Column('seller_id', sa.Integer, sa.ForeignKey('seller.id'), nullable = False ,comment="The seller of this product"),
        sa.Column('name', sa.String(50), nullable=False, comment="The name of the product"),
        sa.Column('description', sa.String(512), nullable=False, comment="The description of the product that will be shown on the frontend, detailed"),
        sa.Column('quantity_available', sa.Integer)
    )

def downgrade() -> None:
    sa.drop_table(table_name)