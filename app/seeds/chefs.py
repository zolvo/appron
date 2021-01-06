from app.models import db, Chef

# Adds a demo user, you can add other users here if you want
def seed_chefs():

    demo1 = Chef(user_id=4,
                about="I'm a Thai Chef for years, I made Thai and Asian cuisine, such as Pad Thai, Drunken Noodles, and Fried Rice and all the Curry series as well(Red, Green, & Yellow)",
                service="Thai Food",
                menu="Pad Thai, Drunken Noodles, Fried Rice, Red Curry, Green Curry, Yellw Curry",
                pricing="$20/hr + $20/person",
                available=True,
                )

    demo2 = Chef(user_id=5,
                about="I'm a Japanese Sushi Chef for 6 years, I made some custom sushi roll such as 'Surf and Turf', 'Sakura Blossom', and 'Green River' as well as all the regular sushi roll",
                service="Shushi Roll",
                menu="Special Roll (Surf and Turf, Sakura Blossom, Green River), Regular Roll (California, Phily, Ocean, Spicy Tuna, etc) and Sushi Nigiri",
                pricing="$20/hr + $25/person",
                available=True,
                )

    demo3 = Chef(user_id=6,
                about="I'm a dedicated Italian Chef for 18 years, I'm famous with Pasta, Pizza, Risotto, Lasagne, and other special sweets on Italian cuisine such as Gelato and Tiramisu",
                service="Italian Food",
                menu="Pasta, Pizza, Risotto, Lasagne, Gelato, Tiramisu",
                pricing="$20/hr + $30/person",
                available=False,
                )



    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_chefs():
    db.session.execute('TRUNCATE chefs;')
    db.session.commit()
