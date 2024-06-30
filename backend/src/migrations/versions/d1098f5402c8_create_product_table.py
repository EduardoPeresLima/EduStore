"""Create 'product' table

Revision ID: d1098f5402c8
Revises: 7262e7aaeee7
Create Date: 2024-02-15 09:24:52.350209

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.mysql import LONGTEXT
from src.migrations.populate_table import populate_history

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
        sa.Column('quantity_in_stock', sa.Integer, nullable=False, comment="The quantity on product in stock on the seller"),
        sa.Column('price_cents', sa.Integer, nullable=False, comment="The price value in cents"),
        sa.Column('currency', sa.String(10), nullable=False, comment="Currency in which the product is being sold"),
        sa.Column('image', LONGTEXT, nullable=False, comment="The image of the product, saved in Base64"),
        sa.Column('created_at', sa.DateTime, nullable=False, comment="The creation time of the product"),
        sa.Column('updated_at', sa.DateTime, nullable=False, comment="The last update time of the product"),
        comment="Products that are sold in the store"
    )
    populate_history(table_name, 1)

def downgrade() -> None:
    op.drop_table(table_name)