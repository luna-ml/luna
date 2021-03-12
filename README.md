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

![](https://github.com/luna-ml/luna/actions/workflows/test.yml/badge.svg?branch=main)

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

## Create a new project

Each ML problem is encapsulated by a "project" in Luna ML.
For example, "Handwritten digit recognition" can be a problem to solve and a project can be created for it. To create a project, followings need to be defined

 - Description of the project (Using either Markdown or Ipynb)
 - Scorer (Instruction for machines to score submitted models)

And you can define them in a git repository.

1. Create a git repository
2. Create a `luna.yaml` file

   ```yaml
   version: v1
   kind: luna-ml/project
   models:
     path:             # relative path to model dirs
   evaluator:
     # evaluator evaluate a model at a time
     dockerfile:       # relative path to the dockerfile. when defined, 'image' will be ignored
     image:            # docker image
     command:          # command to evaluate
     modelPath:        # submitted model to evaluate will be mounted in this path
     evalOutputPath:   # 'command' should generate evaluate results in this path. Results can include any files, such as text, json, video, image, and binary files. When README.md or README.ipynb are generated, they'll be displayed on GUI.
   scorer:
     # scorer scores multiple evaluation output at a time
     dockerfile:       # relative path to the dockerfile. when defined, 'image' will be ignored
     image:            # docker image
     command:          # command to score
     evalOutputFilter: # select file name pattern from eval output path for scoring.
     scoreFieldName:   # default scoring field name from score output
     sort:             # 'desc' or 'asc'
     evalListPath:     # json file that contains information of the evaluation results to score. The json file format is
                       # {
                       #    evalResults: [
                       #      {
                       #        id: <string eval id>,
                       #        outputPath: <string eval output path>
                       #      }
                       #    ]
                       # }
     scoreListPath:    # 'command' should generate a json file in this path that contains score of each evaluation result. Format
                       # {
                       #   scores: [
                       #     {
                       #       id: <string eval id>,
                       #       data: {
                       #         score: <number>,
                       #         another_field: <number>,
                       #         ...
                       #       }
                       #     }
                       #   ]
                       # }
   ```

3. Create a `README.md` or `README.ipynb` with the description of your project. They need to be in the same directory with the `luna.yaml`

4. Create a new project from Luna ML GUI and configure the GitHub actions to connect

## Submit model

A model can be submitted by creating dir and placing necessary files. The directory should have a `luna-model.yaml` file to indicate this is a dir that hold the model to be evaluated.

```yaml
version: v1
kind: luna-ml/model
setupCommands: # setup commands to run before evaluation. e.g. pip install ...

```

Submitted model will be automatically evaluated and scored.

### Evaluate and score model locally

Before submit, you can evaluate and score your model locally.

```
luna-ml eval -p <path to luna.ml in your project> <path to your model dir>
luna-ml score -p <path to luna.ml in your project> <path to your model dir>
```



## Getting involved

Luna ML project is an open-source project. You're welcomed ❤️ to be involved in any area of the project, from design, code, to sharing feedback and ideas!

 - [Issues](https://github.com/luna-ml/luna/issues) - Feel free to create any questions, discussions, bug report.
 - [Pull requests](https://github.com/luna-ml/luna/pulls) - Contribute code. Or just start review code from others. 
 - [Wiki](https://github.com/luna-ml/luna/wiki) - Project roadmap, design, goal. Please add your thought here.

See [CONTRIBUTING](https://github.com/luna-ml/luna/blob/main/CONTRIBUTING.rst) for code contribution.

## Current status

 - [x] Design
   - [Design docs (wiki)](https://github.com/luna-ml/luna/wiki)
   - Key design discussion - [Problem definition](https://github.com/luna-ml/luna/issues/1), [Scoring system](https://github.com/luna-ml/luna/issues/2)
 - [ ] Initial implementation (2Q/2021)  <--- Work in progress.
 - [ ] Initial release 🎉


## Development

For development, you can run server and app manually.

### Server

Open a terminal, with a python 3.6 or later, run

```
pip install -r requirements.txt
./run_dev_server.sh
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
