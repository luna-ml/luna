Generic single-database configuration.

run `flask db` command from root of the project dir

## Change luna/entity

Run flask db migrate to generate migration script.

```
PYTHONPATH=luna FLASK_APP=luna/main.py flask db migrate -m "Initial migration"
```

After manually review the generated script under luna/migrations/versions/,

```
PYTHONPATH=luna FLASK_APP=luna/main.py flask db upgrade
```

apples the migration to db.

See https://flask-migrate.readthedocs.io/en/latest/ for more details.
