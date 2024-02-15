"""Create 'evaluation' table

Revision ID: 4b348dba4699
Revises: 063349dc06d9
Create Date: 2024-02-15 09:26:34.824010

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '4b348dba4699'
down_revision: Union[str, None] = '063349dc06d9'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

table_name = 'evaluation_item'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Evaluation's Identifier"),
        sa.Column('buyer_id', sa.Integer, sa.ForeignKey('buyer.id'), nullable=False, comment="Owner of this evaluation"),
        sa.Column('product_id', sa.Integer, sa.ForeignKey('product.id'),nullable=False, comment="Product that the buyer evaluated"),
        sa.Column('comment_title', sa.String(50), nullable=False, comment="Comment's title"),
        sa.Column('comment', sa.String(1000), nullable=False, comment="Comment's body"),
        sa.Column('rating', sa.Integer, nullable=False, comment="Number the user rated on this product"),
        comment="Store all the buyer's evaluations"
    )

def downgrade() -> None:
    op.drop_table(table_name)