FROM node:10-alpine

RUN mkdir -p /home/node/looks-www && chown -R node:node /home/node/looks-www

WORKDIR /home/node/looks-www

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "npm", "start" ]
