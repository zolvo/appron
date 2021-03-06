"""rating table

Revision ID: 1e11f91185e6
Revises: d96c88487304
Create Date: 2021-01-06 18:01:31.341518

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1e11f91185e6'
down_revision = 'd96c88487304'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ratings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('chef_id', sa.Integer(), nullable=False),
    sa.Column('rate', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['chef_id'], ['chefs.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.alter_column('appointments', 'notes',
               existing_type=sa.VARCHAR(length=255),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('appointments', 'notes',
               existing_type=sa.VARCHAR(length=255),
               nullable=False)
    op.drop_table('ratings')
    # ### end Alembic commands ###
