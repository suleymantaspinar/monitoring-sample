FROM node:12.4.0-alpine as dev

RUN apk update && apk add bash

RUN mkdir /work/
WORKDIR /work/

COPY ./package.json /work/package.json
RUN npm install

COPY . .

CMD node index.js