from flask import Flask, current_app, make_response, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os

webapp_path = os.getenv("WEBAPP_PATH", "../web/build")

app = Flask(__name__,
            static_url_path='',
            static_folder=webapp_path)
app.config.from_envvar('LUNA_CONFIG')

cors = CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")
db = SQLAlchemy(app)
migrate = Migrate(app, db)

@app.route('/health')
def health():
    return "ok"

@app.route('/')
def index():
    return current_app.send_static_file('index.html')

