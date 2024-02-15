"""Create 'address' table

Revision ID: b5d5375e95ae
Revises: 9c9abd2e5c87
Create Date: 2024-02-15 09:25:52.138914

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b5d5375e95ae'
down_revision: Union[str, None] = '9c9abd2e5c87'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

table_name = 'address'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Address Identifier"),
        sa.Column('buyer_id', sa.Integer, sa.ForeignKey('buyer.id'), nullable=False, comment="The buyer that owns this address"),
        sa.Column('postal_code', sa.String(9), nullable=False, comment="Postal code of this address"),
        sa.Column('country', sa.String(100), nullable=False, comment="Country of this address"),
        sa.Column('state', sa.String(100), nullable=False, comment="State of this address"),
        sa.Column('city', sa.String(100), nullable=False, comment="City of this address"),
        sa.Column('street', sa.String(100), nullable=False, comment="Street of this address"),
        sa.Column('residence_number', sa.String(100), nullable=False, comment="Residence number of this address"),
        sa.Column('is_default', sa.Boolean(), nullable=False, comment="Makes this address as the default shipping address"),
        comment="Store the addresses that a buyer can use to ship their orders"
    )

def downgrade() -> None:
    op.drop_table(table_name)