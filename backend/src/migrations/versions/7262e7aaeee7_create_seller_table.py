"""Create 'seller' table

Revision ID: 7262e7aaeee7
Revises: 6c54ab294868
Create Date: 2024-02-15 09:24:41.662853

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from src.migrations.populate_table import populate_history


# revision identifiers, used by Alembic.
revision: str = '7262e7aaeee7'
down_revision: Union[str, None] = '6c54ab294868'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

table_name = 'seller'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Seller's Identifier"),
        sa.Column('name', sa.String(50), nullable=False, comment="Seller's name"),
        sa.Column('password', sa.String(60), nullable=False, comment="Seller's password hashed"),
        comment="Store the seller's information"
    )
    populate_history(table_name)

def downgrade() -> None:
    op.drop_table(table_name)