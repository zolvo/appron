from .db import db
from app.models import Chef


class Rating(db.Model):
    __tablename__ = 'ratings'

    id = db.Column(db.Integer, primary_key=True)
    chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'), nullable=False)
    rate = db.Column(db.Integer)


    chef = db.relationship('Chef', back_populates='rating')


    def __init__(self, chef_id, rate):
        self.chef_id = chef_id
        self.rate = rate


    def to_dict(self):
        return {
            "id": self.id,
            "chef_id": self.chef_id,
            "rate": self.rate
        }
