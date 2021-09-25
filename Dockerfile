FROM node:14.17-alpine

WORKDIR /app
LABEL maintainer="Sergio Villanueva <sergiovillanueva@protonmail.com>"
LABEL org.opencontainers.image.source="https://github.com/hexdump95/msa-posts-express"
EXPOSE 3000

COPY package*.json ./
RUN npm ci --production

COPY . .

CMD ["npm", "run", "start:prod"]
