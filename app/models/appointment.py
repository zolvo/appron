from .db import db
from app.models import User, Chef
from datetime import datetime

class Appointment(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'), nullable=False)
    notes = db.Column(db.String(255))
    date = db.Column(db.DateTime, nullable=False)
    createdAt = db.Column(db.DateTime)

    user = db.relationship('User', back_populates='appointment')
    chef = db.relationship('Chef', back_populates='appointment')


    def __init__(self, user_id, chef_id, notes, date, createdAt):
        self.user_id = user_id
        self.chef_id = chef_id
        self.notes = notes
        self.date = date
        self.createdAt = createdAt

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "chef_id": self.chef_id,
            "notes": self.notes,
            "date": self.date,
            # "createAt": self.createAt
        }
