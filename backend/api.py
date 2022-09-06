#!/usr/bin/python3
""" Tasky API
"""
from flask import Flask
from pymongo import MongoClient
from dotenv import load_dotenv
from os import getenv


app = Flask(__name__)
app.secret_key = b"\xb8\x17\xba\xf9\xc0\x02\xff\xa4'\xee\xbe\xe75 ,r"

load_dotenv()

URI = (f"mongodb+srv://{getenv('MONGODB_USR')}:{getenv('MONGOBD_PWD')}"
       "@cluster0.erimhkb.mongodb.net/?retryWrites=true&w=majority")

cluster = MongoClient(URI)
db = cluster[getenv('MONGOBD_DB')]


# User routes
from user import routes


@app.route('/')
def home():
    return '<h1>Sign Up</h1>'


if __name__ == '__main__':
    app.run()
