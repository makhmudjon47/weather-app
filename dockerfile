FROM node:12-alpine as builder

RUN apk update && apk add --no-cache gettext
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.19-alpine as base
RUN apk update && apk add --no-cache gettext

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .