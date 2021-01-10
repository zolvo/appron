from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class AddressForm(FlaskForm):
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zipcode = IntegerField('zipcode', validators=[DataRequired()])
    phone = IntegerField('phone', validators=[DataRequired()])
    isChef = BooleanField('isChef', validators=[DataRequired()])
