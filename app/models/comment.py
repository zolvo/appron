from .db import db
from app.models import User, Chef

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    chef_id = db.Column(db.Integer, db.ForeignKey('chef.id'), nullable=False)
    text = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.Date, nullable=False)

    user_id = db.relationship('User', back_populates='comments')
    chef_id = db.relationship('Chef', back_populates='Comments')

    def __init__(self, user_id, chef_id, text, createdAt):
        self.user_id = user_id
        self.chef_id = chef.id
        self.test = text
        self.createdAt = createdAt

    def to_dict(self):
        return {
            "user_id": self.user.name,
            "chef_id": self.chef.name,
            "text": self.text,
            "createdAt": self.createdAt
        }
