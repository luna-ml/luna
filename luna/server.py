from flask import Flask, current_app, make_response
import os

webapp_path = os.getenv("WEBAPP_PATH", "../web/build")

app = Flask(__name__,
            static_url_path='',
            static_folder=webapp_path)

@app.route('/health')
def health():
    return "ok"

@app.route('/')
def index():
    return current_app.send_static_file('index.html')

@app.after_request
def after_request_func(response):
    response = make_response()

    # allow dev mode webapp to connect
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')

    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0')
