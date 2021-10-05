from flask import Blueprint, jsonify, url_for
from flask import render_template, request ,redirect

views = Blueprint(__name__ , "views")

@views.route('/')
def home():
    return render_template('index.html', name = '105 mm howitzer')
