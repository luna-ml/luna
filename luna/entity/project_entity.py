from server import db

class ProjectEntity(db.Model):
    __tablename__ = "project"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.Text)
    repository = db.Column(db.String)
    created_at = db.Column(db.DateTime)
    modified_at = db.Column(db.DateTime)
    
