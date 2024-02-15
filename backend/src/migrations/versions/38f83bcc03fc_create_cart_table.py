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

table_name = 'cart_item'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Cart's Identifier"),
        sa.Column('buyer_id', sa.Integer, sa.ForeignKey('buyer.id'), nullable=False, comment="Owner of this cart item"),
        sa.Column('product_id', sa.Integer, sa.ForeignKey('product.id'),nullable=False, comment="Product in this cart"),
        sa.Column('quantity', sa.Integer, nullable=False, comment="Quantity of the product in the cart"),
        comment="Store all the buyer's cart items"
    )

def downgrade() -> None:
    op.drop_table(table_name)