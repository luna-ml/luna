from flask_socketio import Namespace, emit
from server import socketio
from .event_names import PROJECT_LIST

dummy_projects = [
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
]

class ProjectList(Namespace):
    def on_connect(self):
        emit(PROJECT_LIST, dummy_projects)
        # print("On connect")
        pass

    def on_disconnect(self):
        pass

    def on_my_event(self, data):
        emit(PROJECT_LIST, data)

socketio.on_namespace(ProjectList('/project'))
