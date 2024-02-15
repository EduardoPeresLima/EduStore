"""Create 'buyer' table

Revision ID: 6c54ab294868
Revises: 
Create Date: 2024-02-15 09:24:05.999408

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '6c54ab294868'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

table_name = 'buyer'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Buyer's Identifier"),
        sa.Column('name', sa.String(50), nullable=False, comment="Buyer's name"),
        sa.Column('password', sa.String(50), nullable=False, comment="Buyer's password hashed"),
        sa.Column('principal_email', sa.String(320), nullable=False, comment="Buyer's principal email"),
        sa.Column('secondary_email', sa.String(320), nullable=True, comment="Buyer's secondary email, can be null"),
        sa.Column('primary_phone_number', sa.String(20), nullable=False, comment="Buyer's primary phone number"),
        sa.Column('secondary_phone_number', sa.String(20), nullable=True, comment="Buyer's secondary phone number, can be null"),
        comment="Table to store the buyer's information"
    )

def downgrade() -> None:
    sa.drop_table(table_name)
