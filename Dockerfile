FROM node:10-alpine

RUN mkdir -p /home/node/web-api && chown -R node:node /home/node/web-api

WORKDIR /home/node/web-api

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "src/index.js" ]
