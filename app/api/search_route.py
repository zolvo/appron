from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Chef
from sqlalchemy.orm import joinedload


search_routes = Blueprint('search', __name__)


@search_routes.route('/')
# @login_required
def search():
    searchForm = searchForm()

    if searchFrom.validate_on_submit():
        users = User.query.filter(username.like('%') and username.is_a_chef == True)
