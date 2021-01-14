from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Chef, Comment, Appointment
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
    return chef.to_dict()

# @chef_routes.route('/<int:id>/appointment')
# # @login_required
# def appointment(id):
#     chef_id = Chef.query.get(id)
#     user_id = User.query.get(id)
#     notes = Appointment.query.get(notes)
#     date = Appointment.query.get(id)
#     return appointment.to_dict()

#Post a Review Route
@chef_routes.route('/<int:id>/review', methods=['POST'])
def review(id):
    chef_id = Chef.query.get(id).id
    user_id = User.query.filter(username=request.json['username']).first().id
    comment = request.json['comment']

    new_comment = Comment(user_id, chef_id, comment)
    db.session.add(new_comment)
    db.session.commit()

    return new_comment.to_dict()


#Post an appointment Route
@chef_routes.route('/<int:id>/appointment', methods=['POST'])
def post_appointment(id):
    user_id = User.query.get(id).id
    chef_id = Chef.query.get(id).id
    notes = request.json['notes']
    date = request.json['date']

    new_notes = Comment(user_id, chef_id, notes, date)
    db.session.add(new_notes)
    db.session.commit()

    return new_notes.to_dict()
