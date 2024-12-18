## Simple full-stack todo app built with NextJS, TailwindCSS and Prisma

![app apperance](/public/appAppearance.png)

---

Can do basic CRUD operations, without validation.

The app needs to connect to a postgres database, you can create your own or use a docker image.

I created this for while I was teaching my mentee about webdev.

It can also be used for local kubernetes deployment, or testing the CI/CD pipeline on GCP, implemented with GKE and GitHub actions.

---

## Running in Kubernetes Engines (Minikube)

if you are deploying it in some Kubernetes engine, first run

```zsh
npm install
```

to install the required packages and then run

```zsh
docker build -t simple-todo-app .
```

to build an image of the next.js application.

After you get the Kubernetes engine ready, e.g. minikube on local machine, start the database deployment and service using:

```zsh
kubectl apply -f kubernetes/db*.yaml
```

and then start the next deployment and service using:

```zsh
kubectl apply -f kubernetes/app*.yaml
```

The application will be accessible via a link managed by minikube, you can get the link using:

```zch
minikube service todo-next-service
```

---

## Running both containers in Docker

Build the next.js image with:

```zsh
docker build -t simple-todo-app .
```

Start the database and next.js container using Docker Compose:

```zsh
docker compose up
```

and the app will be running on `http://localhost:3000`.

---

## Running next.js server on local machine, and the postgres container in Docker

If you simply want a quick preview of the app, you can use an official postgres image, and run the app on dev server using the command:

```zsh
npm run dev
```

and the app will be running on `http://localhost:3000`.

If you are running the dev server on local machine, do not forget to create an `.env` file

For testing purpose, the following is an example:

```.env
POSTGRES_URL="postgresql://postgres:test@localhost:5432/dev-db"
```
