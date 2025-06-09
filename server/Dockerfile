FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN apt-get update && apt-get install -y ffmpeg


EXPOSE 1936 8000

CMD ["node", "server.js"]
