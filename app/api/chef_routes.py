from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Chef
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
