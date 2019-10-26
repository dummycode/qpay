from flask import render_template, jsonify
from app import app
import random
import datetime
from app import app, models, db
from app.forms import transaction as transaction_forms
from flask import (Blueprint, render_template, redirect, request, url_for,
                   abort, flash)
import uuid


@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index():
    form = transaction_forms.TransactionInfo()
    if form.validate_on_submit():
        table = models.Transaction(
                transaction_id = str(uuid.uuid4()),
                table_id = form.table_id.data,
                server_name = form.server_name.data,
                served_time = str(datetime.datetime.now()),
                current_order = str(form.order.data)
            )
        db.session.add(table)
        db.session.commit()
        flash('The check has been sent', 'positive')
    return render_template('index.html', form=form, title='Home')


@app.route('/map')
def map():
    return render_template('map.html', title='Map')


@app.route('/map/refresh', methods=['POST'])
def map_refresh():
    points = [(random.uniform(48.8434100, 48.8634100),
               random.uniform(2.3388000, 2.3588000))
              for _ in range(random.randint(2, 9))]
    return jsonify({'points': points})


@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact')