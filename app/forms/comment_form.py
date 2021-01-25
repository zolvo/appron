from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Comment
from datetime import datetime


class CommentForm(FlaskForm):
    comment = TextAreaField('comment', validators=[DataRequired()])
