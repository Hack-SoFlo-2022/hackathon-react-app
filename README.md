# Hackathon React App

## Cloning the Repository

Ensure [git is installed](https://git-scm.com/downloads) and then exeucte the following command from a terminal window:

```
git clone https://github.com/Hack-SoFlo-2022/hackathon-react-app.git
```

To view the contents of the repository move inside the repo by running:

```
cd hackathon-react-app
```

## Executing Linter

Linting is the automated checking of application source code for programmatic and stylistic errors. This is done by using a lint tool (otherwise known as linter). A lint tool is a basic static code analyzer.

To run, first install Node dependencies required to execute the Node Unit Testing. execute command:

```
npm install
```

Next execute the linter with the command:

```
npm run lint
```

## Running the Application Locally

This application can be run locally by executing the command:

```
npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

To shut down the site, hit the keys `CTRL + C`

## Building and Running the Docker Container

**Docker** is a tool used to make it easier to create, deploy, and run applications using containers. Containers allow a developer to package up an application with all the parts it needs (libraries and other dependencies).

**Docker Image** is a file, comprised of multiple layers, that used used to execute code in a Docker Container. Docker image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools/libraries, and settings. The content of the docker image content is defined in the Dockerimage file.

To build the Docker image, ensure Docker is installed then execute the command:

```
docker build -t hackathon-react-app:1.0 . -f Dockerfile
```

Once the build is complete, you can run the image with the following command:

```
docker run -it hackathon-react-app:1.0
```