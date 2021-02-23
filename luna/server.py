from flask import Flask, current_app
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

if __name__ == '__main__':
    app.run(host='0.0.0.0')
