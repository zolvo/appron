from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Comment
from datetime import datetime


def date_exists(form, field):
    date = Appointment.query.filter(Appointment.date == date).first()
    if date:
        raise ValidationError("Date is already registered.")

class CommentForm(FlaskForm):
    comment = TextAreaField('comment', validators=[DataRequired()])
