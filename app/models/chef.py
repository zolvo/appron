from .db import db
from app.models import User

class Chef(db.Model):
  __tablename__ = 'chefs'

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  about = db.Column(db.Text, nullable=False)
  service = db.Column(db.Text, nullable=False)
  menu = db.Column(db.String, nullable=False)
  pricing = db.Column(db.String, nullable=False)
  available = db.Column(db.Boolean, nullable=False)

  user = db.relationship('User', back_populates='chef')
  comment = db.relationship('Comment', back_populates='chef')
  appointment = db.relationship('Appointment', back_populates='chef')
  rating = db.relationship('Rating', back_populates='chef')


  def __init__(self, user_id, about, service, menu, pricing, available):
    self.user_id = user_id
    self.about = about
    self.service = service
    self.menu = menu
    self.pricing = pricing
    self.available = available


  def to_dict(self):
    return {
      "id": self.id,
      "user": self.user.to_dict(),
      "about": self.about,
      "service": self.service,
      "menu": self.menu,
      "pricing": self.pricing,
      "available": self.available,
    }
