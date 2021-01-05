from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Chef(db.Model, UserMixin):
  __tablename__ = 'chefs'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  address = db.Column(db.String(255), nullable=False)
  city = db.Column(db.String(50), nullable=False)
  state = db.Column(db.String(50), nullable=False)
  zipcode = db.Column(db.Integer, nullable=False)
  phone = db.Column(db.String(50), nullable=False)
  about = db.Column(db.Text, nullable=False)
  service = db.Column(db.Text, nullable=False)
  menu = db.Column(db.String, nullable=False)
  pricing = db.Column(db.String, nullable=False)
  available = db.Column(db.Boolean, nullable=False)



  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "address": self.address,
      "city": self.city,
      "state": self.state,
      "zipcode": self.zipcode,
      "phone": self.phone,
      "about": self.about,
      "service": self.service,
      "menu": self.menu,
      "pricing": self.pricing,
      "available": self.available
    }
