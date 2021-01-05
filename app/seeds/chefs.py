# from werkzeug.security import generate_password_hash
# from app.models import db, Chef

# # Adds a demo user, you can add other users here if you want
# def seed_chefs():

#     demo_chef = Chef(username="Demo Chef", email="demo@chef.com", password="password",
#                 address="107 Enchanted Way", city="Santa Rosa Beach",
#                 state="Florida", zipcode=32459, phone="(850) 586 55 11",
#                 about="I'm a Thai Chef for years, I made Thai and Asian cuisine, such as Pad Thai, Drunken Noodles, and Fried Rice and all the Curry series as well(Red, Green, & Yellow)",
#                 service="Thai Food",
#                 menu="Pad Thai, Drunken Noodles, Fried Rice, Red Curry, Green Curry, Yellw Curry",
#                 pricing="$20/hr + $20/person",
#                 available=True
#                 )

#     goku = Chef(username="Sun Goku", email="sun@goku.com", password="password",
#                 address="4345 Main St", city="Philadelphia",
#                 state="PA", zipcode=19127, phone="(267) 786 2388",
#                 about="I'm a Japanese Sushi Chef for 6 years, I made some custom sushi roll such as 'Surf and Turf', 'Sakura Blossom', and 'Green River' as well as all the regular sushi roll",
#                 service="Shushi Roll",
#                 menu="Special Roll (Surf and Turf, Sakura Blossom, Green River), Regular Roll (California, Phily, Ocean, Spicy Tuna, etc) and Sushi Nigiri",
#                 pricing="$20/hr + $25/person",
#                 available=True
#                 )

#     mario = Chef(username="Mario Bros", email="mario@bros.com", password="password",
#                 address="18th Street", city="New York City",
#                 state="New York", zipcode=10011, phone="(212) 656 63 29",
#                 about="I'm a dedicated Italian Chef for 18 years, I'm famous with Pasta, Pizza, Risotto, Lasagne, and other special sweets on Italian cuisine such as Gelato and Tiramisu",
#                 service="Italian Food",
#                 menu="Pasta, Pizza, Risotto, Lasagne, Gelato, Tiramisu",
#                 pricing="$20/hr + $30/person",
#                 available=False
#                 )



#     db.session.add(demo_chef)
#     db.session.add(goku)
#     db.session.add(mario)


#     db.session.commit()

# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and resets
# # the auto incrementing primary key
# def undo_chefs():
#     db.session.execute('TRUNCATE chefs;')
#     db.session.commit()
