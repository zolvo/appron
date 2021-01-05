"""chef table

Revision ID: 00223fdc3ccd
Revises: 3651f8ddaaf4
Create Date: 2021-01-05 01:28:57.414753

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '00223fdc3ccd'
down_revision = '3651f8ddaaf4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('chefs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=50), nullable=False),
    sa.Column('state', sa.String(length=50), nullable=False),
    sa.Column('zipcode', sa.Integer(), nullable=False),
    sa.Column('phone', sa.String(length=50), nullable=False),
    sa.Column('about', sa.Text(), nullable=False),
    sa.Column('service', sa.Text(), nullable=False),
    sa.Column('menu', sa.String(), nullable=False),
    sa.Column('pricing', sa.String(), nullable=False),
    sa.Column('available', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('chefs')
    # ### end Alembic commands ###
