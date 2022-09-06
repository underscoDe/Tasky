#!/usr/bin/python3
""" User model
"""
from flask import (
    Flask, jsonify, request, session
)
from passlib.hash import pbkdf2_sha256
from api import db
import uuid


tasky = db['tasky']


class User:
    """ Defines all User related methods
    """
    def start_session(self, user):
        """ Handle User session
        """
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(session), 200

    def signup(self):
        """ Handle User sign up
        """
        # Create the user object
        user = {
            "_id": uuid.uuid4().hex,
            "username": request.form.get('username'),
            "name": request.form.get('name'),
            "email": request.form.get('email'),
            "password": request.form.get('password')
        }

        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])

        # Check for existing email address
        if tasky.find_one({ "email": user['email'] }):
            return jsonify({ "error": "Email address already in use" }), 400

        # Check for existing username
        if tasky.find_one({ "username": user['username'] }):
            return jsonify({ "error": "Username already in use" }), 400

        if tasky.insert_one(user):
            return self.start_session(user)

        return jsonify({ "error": "Signup failed, retry" }), 400

    def login(self):
        """ Handle User login
        """
        user = tasky.find_one({
            "email": request.form.get('email')
        })

        if user and pbkdf2_sha256.verify(request.form.get('password'), user['password']):
            return self.start_session(user)

        return jsonify({ "error": "Invalid login credentials" }), 401
