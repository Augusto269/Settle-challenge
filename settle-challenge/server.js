'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const { url } = require('./app/configs/mongodb.const');
const PORT = process.env.NODE_DOCKER_PORT || 8080;
const ratesRoutes = require('./app/rates/routes/rates.routes');
const healthCheckRoutes = require('./app/health-check/routes/health-check.routes');
const initServer = async () => {
  const server = Hapi.server({
    port: PORT,
    host: '0.0.0.0',
  });

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  ratesRoutes(server);
  healthCheckRoutes(server);

  await server.start();
  console.log('Server Hapi-Settle Working on:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

initServer();
