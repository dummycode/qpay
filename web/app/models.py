from sqlalchemy.ext.hybrid import hybrid_property
from flask.ext.login import UserMixin
from uuid import uuid4
from app import db, bcrypt


class User(db.Model, UserMixin):

    ''' A resteraunt owner who has an account on the website. '''

    __tablename__ = 'users'

    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String, primary_key=True)
    _password = db.Column(db.String)
    confirmation = db.Column(db.Boolean)

    @property
    def full_name(self):
        return '{} {}'.format(self.first_name, self.last_name)

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, plaintext):
        self._password = bcrypt.generate_password_hash(plaintext)

    def check_password(self, plaintext):
        return bcrypt.check_password_hash(self.password, plaintext)

    def get_id(self):
        return self.email

    def is_paid(self):
        return self.paid

class Transaction(db.Model, UserMixin):

    ''' A Table who has an account on the website. '''

    __tablename__ = 'tables'
    transaction_id = db.Column(db.String, primary_key=True)
    table_id = db.Column(db.String)
    server_name = db.Column(db.String)
    current_order = db.Column(db.String)
    served_time = db.Column(db.String)
    
