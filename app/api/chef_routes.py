from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Chef
from sqlalchemy.orm import joinedload

chef_routes = Blueprint('chefs', __name__)


@chef_routes.route('/')
# @login_required
def chefs():
    # # users = User.query.filter(User.is_a_chef == True)
    # chefs_q = Chef.query.join(User, User.id == Chef.user_id)\
    #         .add_columns(User.id, User.username, User.email, User.address, User.city, User.state, User.zipcode, User.phone)\
    #         .filter(User.is_a_chef == True)
    # chefs = chefs_q.all()
    # print('****************** : ', chefs)

    chefs = Chef.query.options(joinedload(Chef.user)).filter(User.is_a_chef == True)
    return {"chefs": [chef.to_dict() for chef in chefs],
            # "users": [user.to_dict() for user in users]
            }


@chef_routes.route('/<int:id>')
# @login_required
def chef(id):
    chef = Chef.query.get(id)
    return chef.to_dict()
