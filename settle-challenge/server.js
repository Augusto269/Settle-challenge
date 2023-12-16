'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const { url } = require('./app/configs/mongodb.const');
const PORT = process.env.NODE_DOCKER_PORT || 8080;

const initServer = async () => {
  const server = Hapi.server({
    port: PORT,
    host: '0.0.0.0',
  });

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return '¡Hey From the serveraaaaaaaa';
    },
  });

  await server.start();
  console.log('Server Hapi-Settle Working on:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

initServer();
