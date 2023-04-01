FROM node:16

RUN mkdir /app

WORKDIR /app

ARG VERSION
ENV APP_VERSION=version.${BASE_VERSION:-v1}

COPY package.json ./

RUN npm install

COPY . .

#exposing port
EXPOSE 8080

CMD ["node", "index.js"]

