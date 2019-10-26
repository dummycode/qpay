from flask.ext.wtf import Form
from wtforms import TextField, PasswordField, DateTimeField, FieldList, IntegerField, FormField
from wtforms.validators import (Required, Length, Email, ValidationError,
                                EqualTo)
from app.models import Transaction

class OrderForm(Form):
    menu_name = TextField(validators=[Required(), Length(min=2)],
                     description='Menu Item')
    menu_price = IntegerField(validators=[Required()],
                     description='Price')


class TransactionInfo(Form):
    table_id = TextField(validators=[Required()],
                     description='table number')
    server_name = TextField(validators=[Required(), Length(min=2)],
                     description="server's name")
    order = FieldList(FormField(OrderForm), min_entries=2, description="Items")

