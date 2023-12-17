'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const { url } = require('./app/configs/mongodb.const');
const PORT = process.env.NODE_DOCKER_PORT || 8080;
const ratesRoutes = require('./app/rates/routes/rates.routes');
const healthCheckRoutes = require('./app/health-check/routes/health-check.routes');
const convertRoutes = require('./app/convert/routes/convert.routes'); 
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const initServer = async () => {
  try {
    const server = Hapi.server({
      port: PORT,
      host: '0.0.0.0',
    });

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await server.register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: {
          info: {
            title: 'Settle Challenge API Documentation',
            version: '1.0.0',
          },
        },
      },
    ]);

    ratesRoutes(server);
    healthCheckRoutes(server);
    convertRoutes(server);

    await server.start();

    if(process.env.NODE_ENV === 'production') return server;
    server.ext('onPreResponse', (request, h) => {
      const response = request.response;
      if (response.isBoom) {
        // Log or handle the error here
        console.error(response);
      }
      return h.continue;
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

initServer();
