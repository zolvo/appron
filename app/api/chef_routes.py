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


#Post a Review Route
@chef_routes.route('/<int:id>/review', methods=['POST'])
def review(id):
    chef_id = Chef.query.get(id).id
    user_id = User.query.get(id).id
    text = request.json['text']

    new_text = Review(user_id, chef_id, text)
    db.session.add(new_text)
    db.session.commit()

    return new_text.to_dict()


#Post an appointment Route
@chef_routes.route('/<int:id>/appointment', methods=['POST'])
def post_appointment(id):
    chef_id = Chef.query.get(id).id
    user_id = User.query.get(id).id
    notes = request.json['notes']

    new_notes = Review(user_id, chef_id, notes)
    db.session.add(new_notes)
    db.session.commit()

    return new_notes.to_dict()
