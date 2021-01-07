from app.models import db, Chef, Rating


def seed_ratings():

    demo1 = Rating(chef_id=Chef.query.get(1).id, rate=5)
    demo2 = Rating(chef_id=Chef.query.get(2).id, rate=3)

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.commit()


def undo_ratings():
    db.session.execute('TRUNCATE ratings;')
    db.session.commit()
