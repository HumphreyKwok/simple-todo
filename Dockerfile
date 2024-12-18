# Build Stage
FROM node:20 AS builder
WORKDIR /build
ARG POSTGRES_URL
ENV POSTGRES_URL=${POSTGRES_URL}
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx prisma generate && npm run build

#Runtime Stage
FROM node:lts
USER node
WORKDIR /app
COPY --from=builder --chown=node:node /build .
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]