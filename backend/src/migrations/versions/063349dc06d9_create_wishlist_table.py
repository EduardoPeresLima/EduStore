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

table_name = 'wishlist'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Wishlist's Identifier"),
        sa.Column('buyer_id', sa.Integer, sa.ForeignKey('buyer.id'), nullable=False, comment="Owner of this wishlist item"),
        sa.Column('product_id', sa.Integer, sa.ForeignKey('product.id'),nullable=False, comment="Product in this wishlist"),
        comment="Store all the buyer's wishlist items"
    )

def downgrade() -> None:
    op.drop_table(table_name)