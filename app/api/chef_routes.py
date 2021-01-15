from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Chef, Comment, Appointment, Rating
from sqlalchemy.orm import joinedload

chef_routes = Blueprint('chefs', __name__)


@chef_routes.route('/')
# @login_required
def chefs():
    chefs = Chef.query.options(joinedload(Chef.user)).filter(User.is_a_chef == True)
    return {"chefs": [chef.to_dict() for chef in chefs],
            }


@chef_routes.route('/<int:id>')
# @login_required
def chef(id):
    chef = Chef.query.get(id)
    comments = Comment.query.filter(Comment.chef_id == id)
    return {"chef": chef.to_dict(), "comment": [a.to_dict() for a in comments]}


@chef_routes.route('/<int:id>/appointment')
# @login_required
def appointment(id):
    appointments = Appointment.query.filter(Appointment.chef_id == id)
    return {"appointment": [a.to_dict() for a in appointments]}


@chef_routes.route('/<int:id>/rating')
# @login_required
def rating(id):
    ratings = Rating.query.filter(Rating.chef_id == id)
    return {"rating": [a.to_dict() for a in ratings]}

#Post a Review Route
@chef_routes.route('/<int:id>', methods=['POST'])
def review(id):
    chef_id = Chef.query.get(id).id
    user_id = User.query.filter(username=request.json['username']).first().id
    stars = request.json['stars']
    comment = request.json['comment']
    createdAt=form.data['createdAt']

    new_comment = Comment(user_id, chef_id, stars, comment, createdAt)
    db.session.add(new_comment)
    db.session.commit()

    return {"comment": new_comment.to_dict()}


#Post an appointment Route
@chef_routes.route('/<int:id>/appointment', methods=['POST'])
def post_appointment(id):
    user_id = User.query.get(id).id
    chef_id = Chef.query.get(id).id
    notes = request.json['notes']
    date = request.json['date']
    createdAt = form.data['createdAt']

    new_appointment = Appointment(user_id, chef_id, notes, date, createdAt)

    db.session.add(new_appointment)
    db.session.commit()

    return new_appointment.to_dict()
