"""Create 'product_category' table

Revision ID: edd8cd2a2745
Revises: e8815dc51ffb
Create Date: 2024-02-15 09:25:39.412362

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'edd8cd2a2745'
down_revision: Union[str, None] = 'e8815dc51ffb'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

table_name = 'product_category'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Identifier of the relationship product-category"),
        sa.Column('product_id', sa.Integer, sa.ForeignKey('product.id'), nullable=False, comment="The product chosen to be in the category"),
        sa.Column('category_id', sa.Integer, sa.ForeignKey('category.id'), nullable=False, comment="A category that the product belongs to"),
        comment="Store the products that belong to the categories"
    )

def downgrade() -> None:
    op.drop_table(table_name)