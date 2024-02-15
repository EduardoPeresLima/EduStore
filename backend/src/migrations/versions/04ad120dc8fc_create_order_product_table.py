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

table_name = 'order_product'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Identifier of the relationship order-product"),
        sa.Column('order_id', sa.Integer, sa.ForeignKey('order.id'), nullable=False, comment="Identifier of the order from which the product is inserted"),
        sa.Column('product_id', sa.Integer, sa.ForeignKey('product.id'), nullable=False, comment="Identifier of the product inserted in the order"),
        sa.Column('quantity', sa.Integer, nullable=False, comment="Quantity of products in the order"),
        comment="Store information about what products and how many are in a specific order"
    )

def downgrade() -> None:
    op.drop_table(table_name)