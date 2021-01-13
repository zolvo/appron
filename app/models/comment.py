from .db import db
from app.models import User, Chef
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime)

    user = db.relationship('User', back_populates='comment')
    chef = db.relationship('Chef', back_populates='comment')

    def __init__(self, user_id, chef_id, comment, createdAt):
        self.user_id = user_id
        self.chef_id = chef_id
        self.comment = comment
        self.createdAt = createdAt

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "chef_id": self.chef_id,
            "comment": self.comment,
            "createdAt": self.createdAt
        }
