FROM node:14

WORKDIR /settle-challenge
COPY package.json .
RUN npm install
COPY . .
CMD npm run start:dev