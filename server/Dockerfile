FROM node:alpine3.16

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","run","start:dev"]