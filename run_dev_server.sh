#!/bin/bash

if [ -L ${BASH_SOURCE-$0} ]; then
  BIN=$(dirname $(readlink "${BASH_SOURCE-$0}"))
else
  BIN=$(dirname ${BASH_SOURCE-$0})
fi
BIN=$(cd "${BIN}">/dev/null; pwd)

export LUNA_CONFIG=${BIN}/config_dev.cfg

echo "Apply db migrations"
PYTHONPATH=${BIN}/luna FLASK_APP=${BIN}/luna/main.py flask db upgrade
if [ $? -ne 0 ]; then
  echo "DB migration failed"
  exit 1
fi

echo "Run server"
python ${BIN}/luna/main.py
