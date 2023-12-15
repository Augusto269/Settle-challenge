const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');

const initServer = async () => {
  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0',
  });

  await mongoose.connect('mongodb://mongo:27017/settle', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return '¡Hey From the server';
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
