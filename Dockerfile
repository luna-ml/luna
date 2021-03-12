FROM node:12-buster AS builder

# build webapp
COPY web /web
RUN cd /web && \
    npm i && \
    npm run build

FROM python:3.6

# Add user
RUN addgroup --gid 1000 luna && \
    useradd -rm -d /home/luna -s /bin/bash -g luna -G sudo -u 1000 luna
USER 1000
WORKDIR /home/luna

# install webapp
COPY --from=builder --chown=luna:luna /web/build /home/luna/web
ENV WEBAPP_PATH=/home/luna/web

# server
COPY --chown=luna:luna luna /home/luna/luna
COPY --chown=luna:luna migrations /home/luna/migrations
COPY --chown=luna:luna requirements.txt /home/luna
RUN pip install -r requirements.txt && \
    mkdir -p /home/luna/migrations/versions

# add bin dir of pip
ENV PATH="/home/luna/.local/bin:${PATH}"

CMD [ "bash", "-c", "PYTHONPATH=luna FLASK_APP=luna/main.py flask db upgrade && python luna/main.py" ]
