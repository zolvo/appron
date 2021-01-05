from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo_user = User(username="Demo User", email="demo@user.com", password="password",
                address="21 Jump St", city="Panama City",
                state="Florida", zipcode=32459, phone="(850) 586 25 20",
                about="Life is a boat, it takes you where ever the wind blows, just go with the flows",
                date_created="May 20, 2015"
                )

    zoro = User(username="Zoro Roronoa", email="zoro@roronoa.com", password="password",
                address="321 Heaven St", city="Seattle",
                state="Washington", zipcode=98105, phone="(206) 333 7768",
                about="I eat meat, I eat no rice, I eat a lot",
                date_created="Aug 02, 2019"
                )

    chunli = User(username="Chun Li", email="chun@li.com", password="password",
                address="7778 Main St", city="Riverdale",
                state="Chicago", zipcode=60176, phone="(773) 825 34 21",
                about="Always love Chinese Food",
                date_created="July 14, 2020"
                )



    db.session.add(demo_user)
    db.session.add(zoro)
    db.session.add(chunli)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
