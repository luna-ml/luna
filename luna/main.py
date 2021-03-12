from server import socketio, app

import api.project # import api module to initialize rest api endpint and socketio handler
import api.v1 # import api module to initialize rest api endpint and socketio handler

if __name__ == '__main__':
    # socketio.run() replaces app.run(host='0.0.0.0')
    socketio.run(app, host='0.0.0.0')
