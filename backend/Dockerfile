# Esto es un comentario
FROM node:22.14.0

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "dev" ]
