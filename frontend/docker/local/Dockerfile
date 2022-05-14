FROM node:17.7.1-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

ENV PATH $PATH:/usr/src/app/node_modules/.bin