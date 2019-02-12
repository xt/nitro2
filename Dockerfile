FROM node:10.15.1-stretch-slim

RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# COPY packages /usr/src/app
# COPY server /usr/src/app

# COPY package.json /usr/src/app/package.json

# RUN npm install
# RUN NPM build:apps

# EXPOSE 8080

# CMD ['npm', 'start']