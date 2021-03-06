from werkzeug.security import generate_password_hash
from app.models import db, User
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo_user = User(username="Demo User", email="demo@user.com", password="password",
                address="21 Jump St", city="Panama City",
                state="Florida", zipcode=32459, phone="(850) 586 25 20",
                is_a_chef=False,
                createdAt=datetime.now()
                )

    zoro = User(username="Zoro Roronoa", email="zoro@roronoa.com", password="password",
                address="321 Heaven St", city="Seattle",
                state="Washington", zipcode=98105, phone="(206) 333 7768",
                is_a_chef=False,
                createdAt=datetime.now()
                )

    chunli = User(username="Chun Li", email="chun@li.com", password="password",
                address="7778 Main St", city="Riverdale",
                state="Chicago", zipcode=60176, phone="(773) 825 34 21",
                is_a_chef=False,
                createdAt=datetime.now()
                )

    demo_chef = User(username="Demo Chef", email="demo@chef.com", password="password",
                address="107 Enchanted Way", city="Santa Rosa Beach",
                state="Florida", zipcode=32459, phone="(850) 586 55 11",
                is_a_chef=True,
                createdAt=datetime.now()
                )

    goku = User(username="Sun Goku", email="sun@goku.com", password="password",
                address="4345 Main St", city="Philadelphia",
                state="PA", zipcode=19127, phone="(267) 786 2388",
                is_a_chef=True,
                createdAt=datetime.now()
                )

    mario = User(username="Mario Bros", email="mario@bros.com", password="password",
                address="18th Street", city="New York City",
                state="New York", zipcode=10011, phone="(212) 656 63 29",
                is_a_chef=True,
                createdAt=datetime.now()
                )


    db.session.add(demo_user)
    db.session.add(zoro)
    db.session.add(chunli)
    db.session.add(demo_chef)
    db.session.add(goku)
    db.session.add(mario)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
