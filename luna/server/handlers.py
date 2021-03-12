from flask import Flask, current_app, make_response, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO
import os

webapp_path = os.getenv("WEBAPP_PATH", "../web/build")

app = Flask(__name__,
            static_url_path='',
            static_folder=webapp_path)
cors = CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/health')
def health():
    return "ok"

@app.route('/')
def index():
    return current_app.send_static_file('index.html')

