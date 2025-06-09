FROM node:18-buster

RUN apt-get update && apt-get install -y ffmpeg

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "server.js"]
