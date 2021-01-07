from flask.cli import AppGroup
from .users import seed_users, undo_users
from .chefs import seed_chefs, undo_chefs
from .comments import seed_comments, undo_comments
from .appointments import seed_appointments, undo_appointments
from .ratings import seed_ratings, undo_ratings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_chefs()
    seed_comments()
    seed_appointments()
    seed_ratings()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_chefs()
    undo_comments()
    undo_appointments()
    undo_ratings()
    # Add other undo functions here
