FROM node:10-alpine

RUN mkdir -p /home/node/looks-api && chown -R node:node /home/node/looks-api

WORKDIR /home/node/looks-api

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node .. .

EXPOSE 8080

CMD [ "node", "src/index.js" ]
