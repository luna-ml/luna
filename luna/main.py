from server import socketio, app
import api

if __name__ == '__main__':
    # socketio.run() replaces app.run(host='0.0.0.0')
    socketio.run(app, host='0.0.0.0')
