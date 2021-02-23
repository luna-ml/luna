<br /><br />
<p align="center">
  <img width="160px" src="https://user-images.githubusercontent.com/1540981/108800725-c77ec080-7548-11eb-9013-b28ee4ee4879.png" />
  <br /><br />
  Luna | 달님 | 月
  <br />
  <a href="https://staroid.com/demo/GITHUB/luna-ml/luna/main" target="_blank">Live demo</a>
</p>
<br />
<br />

# Luna ML project

Luna project provides a leaderboard for ML models, and more to enable faster ML model development iterations. ML leaderboard keeps metadata and metrics of your ML models and their scores. So your team can find problems to work on and get informations about how they have been evolved. Planned components are

 - Leaderboard: List ML models based on score, for each project
 - Scoring system: Score submitted ML model statically or dynamically
 - Project statistics: Provides insight of each project, their historical score evolution
 - Integration to model serving (second phase): Trigger and get status information from your ML model serving infra


Here's preview of the UI.

![](https://user-images.githubusercontent.com/1540981/108799967-afa63d00-7546-11eb-8123-c6ce016fc256.png)


Visit [project wiki](https://github.com/luna-ml/luna/wiki) to learn more about the project and idea behind of it.

## Getting started

### Cloud
Click the button below to run private instance of Luna ML leaderboard on the cloud.

[![Run](https://staroid.com/api/run/button.svg)](https://staroid.com/api/run)

### Docker

Build included `Dockerfile` and run.

```
# build docker image
docker build -t luna .

# run container based on the image
docker run -it -p5000:5000 luna
```
and browse http://localhost:5000

### Kubernetes

With [skaffold](https://skaffold.dev), you can build and deploy the project to your own Kubernetes cluster.

```
# build container and deploy to Kubernetes cluster
skaffold run
```



## Getting involved

Luna ML project is an open-source project. You're welcomed ❤️ to be involved in any area of the project, from design, code, to sharing feedback and ideas!

 - [Issues](https://github.com/luna-ml/luna/issues) - Feel free to create any questions, discussions, bug report.
 - [Pull requests](https://github.com/luna-ml/luna/pulls) - Contribute code. Or just start review code from others. 
 - [Wiki](https://github.com/luna-ml/luna/wiki) - Project roadmap, design, goal. Please add your thought here.

See [CONTRIBUTING](https://github.com/luna-ml/luna/blob/main/CONTRIBUTING.rst) for code contribution.

## Current status

 - [ ] Design <--- Work in progress.
   - [Design docs (wiki)](https://github.com/luna-ml/luna/wiki)
   - Key design discussion - [Problem definition](https://github.com/luna-ml/luna/issues/1), [Scoring system](https://github.com/luna-ml/luna/issues/2)
 - [ ] Initial implementation (2Q/2021)
 - [ ] Initial release 🎉


## Development

For development, you can run server and app manually.

### Server

Open a terminal, with a python 3.6 or later, run

```
pip install -r requirements.txt
python luna/server.py
```

the server will run and listen http://localhost:5000

### Webapp

Open another terminal and run

```
cd web
npm start
```

and you can browse http://localhost:3000

### Kubernetes

To test deployment on Kubernetes locally (with [Minikube](https://minikube.sigs.k8s.io/)), run

```
skaffold dev --port-forward
```
