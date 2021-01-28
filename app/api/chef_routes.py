from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Chef, Comment, Appointment, Rating
from app.forms import CommentForm, AppointmentForm
from sqlalchemy.orm import joinedload
import json;
import datetime;

chef_routes = Blueprint('chefs', __name__)



@chef_routes.route('/')
def chefs():
    chefs = Chef.query.options(joinedload(Chef.user)).filter(User.is_a_chef == True)
    return {"chefs": [chef.to_dict() for chef in chefs]}


@chef_routes.route('/<int:id>')
def chef(id):
    chef = Chef.query.get(id)
    comments = Comment.query.filter(Comment.chef_id == id)
    return {"chef": chef.to_dict(), "comment": [a.to_dict() for a in comments]}


@chef_routes.route('/<int:id>/appointment')
def appointment(id):
    appointments = Appointment.query.filter(Appointment.chef_id == id)
    users = User.query.filter(User.id == id)
    return {"appointment": [a.to_dict() for a in appointments], "user": [user.to_dict() for user in users]}


# @chef_routes.route('/<int:id>')
# def rating(id):
#     ratings = Rating.query.filter(Rating.chef_id == id)
#     return {"rating": [a.to_dict() for a in ratings]}

#Post a Review Route
@chef_routes.route('/<int:id>', methods=['POST'])
@login_required
def review(id):
    form = CommentForm()
    data = request.get_json()
    new_comment = Comment(
        user_id = data['user_id'],
        chef_id = data['chef_id'],
        stars = data['stars'],
        comment= form.data['comment'])

    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()

#Post an appointment Route
@chef_routes.route('/<int:id>/appointment', methods=['POST'])
def post_appointment(id):
    form = AppointmentForm()
    data = request.get_json()

    new_appointment = Appointment(
        user_id = data["user_id"],
        chef_id = data["chef_id"],
        notes= form.data['notes'],
        date= form.data['date'])

    db.session.add(new_appointment)
    db.session.commit()

    return new_appointment.to_dict()
