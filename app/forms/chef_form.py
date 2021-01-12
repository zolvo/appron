from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import User, Chef


class ChefForm(FlaskForm):
    user_id = IntegerField('userId')
    about = StringField('about', validators=[DataRequired()])
    service = StringField('service', validators=[DataRequired()])
    menu = StringField('menu', validators=[DataRequired()])
    pricing = StringField('pricing', validators=[DataRequired()])
    available = BooleanField('available')
