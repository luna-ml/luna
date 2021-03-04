from flask import Flask, current_app, make_response, jsonify
from flask_cors import CORS
import os

webapp_path = os.getenv("WEBAPP_PATH", "../web/build")

app = Flask(__name__,
            static_url_path='',
            static_folder=webapp_path)
cors = CORS(app)

@app.route('/projects')
def listProjects():
    # mock data for now
    return jsonify([
        {
            'id': "0112",
            'name': "Optimize express pickup route",
            'description': "Find the best route to pick up multiple passengers in a single trip"
        },
        {
            'id': "0113",
            'name': "Minimize customer waiting time",
            'description': "Minimize waiting time between destination set from app and a pickup"
        }
    ])

@app.route('/health')
def health():
    return "ok"

@app.route('/')
def index():
    return current_app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
