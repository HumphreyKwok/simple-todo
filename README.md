#### Simple full-stack todo app built with NextJS, TailwindCSS and Prisma

![app apperance](/public/appAppearance.png)

---

Can do basic CRUD operations, without validation.

The database needs to be ran in a Postgres environment, you can create your own or use the docker compose file to run it in docker.

I created this for testing the CI/CD pipeline on GCP, implemented with GKE and GitHub actions.

if you are deploying it in a local environment, first run

```zsh
npm run dev
```

to install the required packages and then run

```zsh
docker compose up
```

to build a local postgres container.

After the installation and database setup, you can run the app with

```zsh
npm run dev
```

and the app will be running on `http://localhost:3000`.

_Don't forget to create a `POSTGRES_URL` variable in the `.env` file_

For testing purpose, the following is an example:

```.env
POSTGRES_URL="postgresql://postgres:test@localhost:15432/dev-db"
```
