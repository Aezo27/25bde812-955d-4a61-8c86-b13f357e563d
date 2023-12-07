Hello, I'm Rama, I created this project with the aim of completing a task from [Ambisius Lab](https://www.ambisius.com/) for a job vacancy as a Full-time Software Engineer.

I added the docker compose feature for production and development with hot reload feature (windows).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Docker Compose

How to build docker compose:

```bash
# Development
docker-compose up --build
# Production
docker-compose -f docker-composer.production.yml up --build
```

How to run and stop docker container:

```bash
# Run
docker start -i ambisiuslab
# stop
ddocker stop ambisiuslab
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.