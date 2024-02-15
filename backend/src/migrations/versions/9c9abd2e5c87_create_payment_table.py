"""Create 'payment' table

Revision ID: 9c9abd2e5c87
Revises: edd8cd2a2745
Create Date: 2024-02-15 09:25:46.975340

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9c9abd2e5c87'
down_revision: Union[str, None] = 'edd8cd2a2745'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

table_name = 'payment'
def upgrade() -> None:
    op.create_table(
        table_name, 
        sa.Column('id', sa.Integer, primary_key=True, comment="Payment's Identifier"),
        sa.Column('buyer_id', sa.Integer, sa.ForeignKey('buyer.id'), nullable=False, comment="Buyer that made this payment"),
        sa.Column('payment_method', sa.String(50), nullable=False, comment="Payment method, for example: PIX"),
        sa.Column('value_cents', sa.Integer, nullable=False, comment="Value payed in cents"),
        sa.Column('created_at', sa.DateTime, nullable=False, comment="When the payment was initiated"),
        sa.Column('payed_at', sa.DateTime, nullable=False, comment="When the payment was finalized"),
        comment="Detailed payment history"
    )

def downgrade() -> None:
    op.drop_table(table_name)