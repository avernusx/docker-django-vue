FROM mhart/alpine-node:9.11.0

RUN mkdir -p /var/www
WORKDIR /var/www

RUN apk update && apk add python-dev bash make g++
RUN npm install -g yarn