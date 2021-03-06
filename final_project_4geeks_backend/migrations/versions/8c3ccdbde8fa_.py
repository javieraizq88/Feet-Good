"""empty message

Revision ID: 8c3ccdbde8fa
Revises: 
Create Date: 2020-05-05 12:46:59.406336

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8c3ccdbde8fa'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('roles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('admin',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=100), nullable=False),
    sa.Column('password', sa.String(length=100), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('lastname', sa.String(length=100), nullable=True),
    sa.Column('role_id', sa.Integer(), nullable=False),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_table('client',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('role_id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=100), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('lastname', sa.String(length=100), nullable=False),
    sa.Column('gender', sa.String(length=100), nullable=True),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('avatar', sa.String(length=100), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.Column('active', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('nutritionist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('role_id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('lastname', sa.String(length=100), nullable=False),
    sa.Column('gender', sa.String(length=100), nullable=True),
    sa.Column('avatar', sa.String(length=100), nullable=True),
    sa.Column('background', sa.String(length=100), nullable=False),
    sa.Column('profesional_title', sa.String(length=100), nullable=False),
    sa.Column('nutritionist_validation_title', sa.String(length=100), nullable=True),
    sa.Column('specialties', sa.String(length=100), nullable=True),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('lastWork', sa.String(length=100), nullable=True),
    sa.Column('lastWorkyears', sa.Integer(), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.Column('active', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('trainer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('role_id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('lastname', sa.String(length=100), nullable=False),
    sa.Column('gender', sa.String(length=100), nullable=True),
    sa.Column('avatar', sa.String(length=100), nullable=True),
    sa.Column('background', sa.String(length=100), nullable=False),
    sa.Column('profesional_title', sa.String(length=100), nullable=False),
    sa.Column('specialties', sa.String(length=100), nullable=True),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('lastWork', sa.String(length=100), nullable=True),
    sa.Column('lastWorkyears', sa.Integer(), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.Column('active', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('planes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('client_id', sa.Integer(), nullable=False),
    sa.Column('nutritionist_email', sa.Integer(), nullable=False),
    sa.Column('trainer_email', sa.Integer(), nullable=False),
    sa.Column('objective', sa.String(length=250), nullable=False),
    sa.Column('comment', sa.Text(), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.Column('active', sa.String(length=50), nullable=True),
    sa.Column('embarazo', sa.String(length=100), nullable=True),
    sa.Column('enfermedades', sa.String(length=100), nullable=True),
    sa.Column('medicamento', sa.String(length=100), nullable=True),
    sa.Column('cirugias', sa.String(length=100), nullable=True),
    sa.Column('orina', sa.String(length=100), nullable=True),
    sa.Column('digestion', sa.String(length=100), nullable=True),
    sa.Column('sintomas', sa.String(length=100), nullable=True),
    sa.Column('ayunos', sa.String(length=100), nullable=True),
    sa.Column('apetito', sa.String(length=100), nullable=True),
    sa.Column('ansiedad', sa.String(length=100), nullable=True),
    sa.Column('tabaco', sa.String(length=100), nullable=True),
    sa.Column('alcohol', sa.String(length=100), nullable=True),
    sa.Column('actividad_fisica', sa.String(length=100), nullable=True),
    sa.Column('suplemento_nutricional', sa.String(length=100), nullable=True),
    sa.Column('lesiones', sa.String(length=100), nullable=True),
    sa.Column('alergia', sa.String(length=100), nullable=True),
    sa.Column('peso', sa.String(length=100), nullable=True),
    sa.Column('altura', sa.String(length=100), nullable=True),
    sa.Column('cintura', sa.String(length=100), nullable=True),
    sa.Column('workout_plan', sa.String(length=100), nullable=True),
    sa.Column('diet_plan', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['client_id'], ['client.id'], ),
    sa.ForeignKeyConstraint(['nutritionist_email'], ['nutritionist.email'], ),
    sa.ForeignKeyConstraint(['trainer_email'], ['trainer.email'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('client_nutritionist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('client_email', sa.Integer(), nullable=False),
    sa.Column('nutritionist_email', sa.Integer(), nullable=False),
    sa.Column('plan_id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=250), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.Column('sender', sa.String(length=250), nullable=True),
    sa.ForeignKeyConstraint(['client_email'], ['client.email'], ),
    sa.ForeignKeyConstraint(['nutritionist_email'], ['nutritionist.email'], ),
    sa.ForeignKeyConstraint(['plan_id'], ['planes.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('client_trainer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('client_email', sa.Integer(), nullable=False),
    sa.Column('trainer_email', sa.Integer(), nullable=False),
    sa.Column('plan_id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=250), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.Column('sender', sa.String(length=250), nullable=True),
    sa.ForeignKeyConstraint(['client_email'], ['client.email'], ),
    sa.ForeignKeyConstraint(['plan_id'], ['planes.id'], ),
    sa.ForeignKeyConstraint(['trainer_email'], ['trainer.email'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('client_trainer')
    op.drop_table('client_nutritionist')
    op.drop_table('planes')
    op.drop_table('trainer')
    op.drop_table('nutritionist')
    op.drop_table('client')
    op.drop_table('admin')
    op.drop_table('roles')
    # ### end Alembic commands ###
