FROM node:18-alpine AS base

WORKDIR /server

COPY package.json package-lock.json* .

RUN npm i

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
