# Todo API

A simple Todo REST API built with Node.js and Express. The application uses in-memory storage, is containerized with Docker, and automatically builds a Docker image using GitHub Actions.

## Tech Stack

- Node.js
- Express.js
- Docker
- GitHub Actions

## API Endpoints

### 1. Create a Task

**POST** `/tasks`

Request body:

json
{
  "title": "Learn Docker"
}

Example response:

{
  "id": 1,
  "title": "Learn Docker",
  "done": false
}
2. List All Tasks

GET /tasks

Returns all tasks currently stored in memory.

Example response:

[
  {
    "id": 1,
    "title": "Learn Docker",
    "done": false
  }
]
3. Mark a Task as Done

POST /tasks/:id/done

Example:

POST /tasks/1/done

Example response:

{
  "id": 1,
  "title": "Learn Docker",
  "done": true
}
Run Locally

Install dependencies:

npm install

Start the server:

node src/server.js

The API runs on:

http://localhost:3000
Run with Docker

Build the Docker image:

docker build -t todo-api .

Run the container:

docker run -p 3000:3000 todo-api

The API will then be available at:

http://localhost:3000
GitHub Actions

A GitHub Actions workflow is configured to run whenever code is pushed to the main branch.

The workflow:

Checks out the repository.
Runs on an Ubuntu GitHub-hosted runner.
Builds the Docker image.

The Docker image is only built for CI validation and is not pushed to a container registry.

Storage

The application uses in-memory storage for tasks.

This means tasks are lost when the application or Docker container is restarted. This approach was chosen because persistent storage was not required by the assignment.

Reflection
Tricky Part

The trickiest part was understanding the relationship between the application, Docker image, Docker container, and port mapping. Troubleshooting the local Docker environment was also an important part of the implementation.

Design Choices

Node.js with Express was chosen because it provides a simple and lightweight way to build REST APIs. In-memory storage was used because it was allowed by the assignment and keeps the implementation simple. Docker was used to package the application and its dependencies consistently.

What I Would Improve

For a production-ready application, I would add a persistent database such as PostgreSQL, automated tests, stronger request validation, authentication, and additional CI/CD stages for publishing and deploying the Docker image.
