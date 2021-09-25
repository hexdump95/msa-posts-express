FROM node:14.17-alpine

WORKDIR /app
LABEL maintainer="Sergio Villanueva <sergiovillanueva@protonmail.com>"
EXPOSE 3000

COPY package*.json ./
RUN npm ci --production

COPY . .

CMD ["npm", "run", "start:prod"]
