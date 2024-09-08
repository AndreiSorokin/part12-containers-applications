FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

RUN npm test

FROM nginx:1.25-alpine

ENV VITE_BACKEND_URL=http://localhost:3000

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/htm