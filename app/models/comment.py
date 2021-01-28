from .db import db
from app.models import User, Chef
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'), nullable=False)
    stars = db.Column(db.Integer)
    comment = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True), server_default = db.func.now())

    user = db.relationship('User', back_populates='comment')
    chef = db.relationship('Chef', back_populates='comment')

    def to_dict(self):
        return {
            "id": self.id,
            "user":self.user.username,
            "user_id":self.user_id,
            "chef_id": self.chef_id,
            "stars": self.stars,
            "comment": self.comment,
            "createdAt": self.createdAt,
        }
