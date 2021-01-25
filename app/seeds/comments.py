from app.models import db, User, Chef, Comment
from datetime import datetime

def seed_comments():

    demo1 = Comment(user_id=User.query.filter(User.username == 'Chun Li').first().id,
                    chef_id=Chef.query.get(1).id,
                    stars=5,
                    comment="Absolutely the best ! very clean, very nice, very good !!",
                    )

    demo2 = Comment(user_id=User.query.filter(User.username == 'Demo User').first().id,
                    chef_id=Chef.query.get(2).id,
                    stars=3,
                    comment="Awesome! need to eat more of those from the chef, I'm so happy",
                    )

    demo3 = Comment(user_id=User.query.filter(User.username == 'Zoro Roronoa').first().id,
                    chef_id=Chef.query.get(1).id,
                    stars=3,
                    comment="He was very profesional in any way, the ingridients, the plating, the falvor, all is what expected from the great chef ",
                    )



    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()
