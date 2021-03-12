from flask import jsonify
from server import app
from .project import dummy_projects
# rest api

@app.route('/v1/projects')
def listProjects():
    # mock data for now
    return jsonify(dummy_projects)
