"""

Revision ID: cee81edc5188
Revises: 50ab32d45113
Create Date: 2024-10-06 15:54:35.100172

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'cee81edc5188'
down_revision: Union[str, None] = '50ab32d45113'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('vacancy_user_association', sa.Column('percentageSuitability', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('vacancy_user_association', 'percentageSuitability')
    # ### end Alembic commands ###
