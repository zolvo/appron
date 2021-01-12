from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from datetime import datetime



def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")




class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zipcode = StringField('zipcode', validators=[DataRequired()])
    phone = StringField('phone', validators=[DataRequired()])
    is_a_chef = BooleanField('is_a_chef')
    createdAt = DateField('createdAt', format='%Y-%m-%dT%H:%M:%S',default=datetime.today, validators=[DataRequired()])
