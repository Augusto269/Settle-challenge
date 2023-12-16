const { getRates, postRates } = require('../controller/rates.controller');

const ratesRoutes = (server) => {
  server.route({
    method: 'GET',
    path: '/rates',
    handler: getRates,
  });

  server.route({
    method: 'POST',
    path: '/rates',
    handler: postRates,
  });
};

module.exports = ratesRoutes;