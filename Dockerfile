FROM node:12
RUN mkdir -p /usr/src/newServer
WORKDIR /usr/src/newServer
COPY package*.json ./
RUN apt-get update
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD [ "npm", "start" ]