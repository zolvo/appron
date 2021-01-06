from app.models import db, User, Chef, Appointment
from datetime import datetime

def seed_appointments():

    demo1 = Appointment(user_id=User.query.filter(User.username == 'Chun Li').first().id,
                        chef_id=Chef.query.get(1).id,
                        notes="Please get here very early in the morning, we are ready at 8 o'clock",
                        date=datetime.now(),
                        createdAt=datetime.now()
                        )


    db.session.add(demo1)
    db.session.commit()

def undo_appointments():
    db.session.execute('TRUNCATE appointments;')
    db.session.commit()
