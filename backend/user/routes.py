#!/usr/bin/python3
""" User routes
"""
from flask import Flask
from api import app
from user.models import User


@app.route('/api/v1/user/signup/', methods=['POST'])
def signup():
    return User().signup()


@app.route('/api/v1/user/login/', methods=['POST'])
def login():
    return User().login()
