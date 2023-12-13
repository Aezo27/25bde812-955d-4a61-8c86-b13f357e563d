[![Jest Test](https://github.com/Aezo27/25bde812-955d-4a61-8c86-b13f357e563d/actions/workflows/testing.yml/badge.svg)](https://github.com/Aezo27/25bde812-955d-4a61-8c86-b13f357e563d/actions/workflows/testing.yml) [![Vercel Production Deployment](https://github.com/Aezo27/25bde812-955d-4a61-8c86-b13f357e563d/actions/workflows/varcel.yml/badge.svg)](https://github.com/Aezo27/25bde812-955d-4a61-8c86-b13f357e563d/actions/workflows/varcel.yml) [![CI Dockerhub](https://github.com/Aezo27/25bde812-955d-4a61-8c86-b13f357e563d/actions/workflows/docker.yml/badge.svg)](https://github.com/Aezo27/25bde812-955d-4a61-8c86-b13f357e563d/actions/workflows/docker.yml)

![My Remote Image](https://github.com/Aezo27/25bde812-955d-4a61-8c86-b13f357e563d/blob/03e6fb9c4b93f5261339bc19ccf6299841ce3e63/public/thumb.png)

Hello, I'm Rama, I created this project with the aim of completing a task from [Ambisius Lab](https://www.ambisius.com/) for a job vacancy as a Full-time Software Engineer.

[Live Website](https://dummyjson-product-dashboard.vercel.app/) to see this aplication

I took all the data from [dummyjson](https://dummyjson.com/docs/products). and all APIs work such as Create, Update, Delete (simulation only), and Read.
There are search features, product filters and pagination.

* Darkmode / lightmode
* Validation using [zod](https://zod.dev/)
* Test unit with [Jest](jestjs.io) and [React Test Library](https://testing-library.com/)
* API Mocking Library with [MSW](https://mswjs.io/)
* Github Workflow (Jest test, [Vercel deployment](https://vercel.com/), [DockerHub](https://hub.docker.com/))
* I added the docker compose feature for production and development with hot reload feature (windows).


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
docker stop ambisiuslab
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.