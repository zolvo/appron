from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  address = db.Column(db.String(255), nullable=False)
  city = db.Column(db.String(50), nullable=False)
  state = db.Column(db.String(50), nullable=False)
  zipcode = db.Column(db.Integer, nullable=False)
  phone = db.Column(db.String(50), nullable=False)
  is_a_chef = db.Column(db.Boolean, nullable=False)
  createdAt = db.Column(db.DateTime, nullable=False)

  chef = db.relationship('Chef', back_populates='user', uselist=False, cascade='all, delete-orphan')
  comment = db.relationship('Comment', back_populates='user', cascade='all, delete-orphan')


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
      "is_a_chef": self.is_a_chef,
      "createdAt": self.createdAt
    }
