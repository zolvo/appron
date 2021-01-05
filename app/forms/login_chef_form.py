# from flask_wtf import FlaskForm
# from wtforms import StringField
# from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import Chef


# def chef_exists(form, field):
#     print("Checking if chef exists", field.data)
#     email = field.data
#     chef = Chef.query.filter(Chef.email == email).first()
#     if not user:
#         raise ValidationError("Email provided not found.")


# def password_matches(form, field):
#     print("Checking if password matches")
#     password = field.data
#     email = form.data['email']
#     chef = Chef.query.filter(Chef.email == email).first()
#     if not chef:
#         raise ValidationError("No such user exists.")
#     if not user.check_password(password):
#         raise ValidationError("Password was incorrect.")


# class LoginChefForm(FlaskForm):
#     email = StringField('email', validators=[DataRequired(), chef_exists])
#     password = StringField('password', validators=[
#                            DataRequired(), password_matches])
