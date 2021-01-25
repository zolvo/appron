from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import Appointment
from datetime import date


def date_exists(form, field):
    date = Appointment.query.filter(Appointment.date == date).first()
    if date:
        raise ValidationError("Date is already registered.")


class AppointmentForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    chef_id = IntegerField('chef_id', validators=[DataRequired()])
    notes = StringField('notes', validators=[DataRequired()])
    date = DateField('date', validators=[DataRequired(), date_exists])
