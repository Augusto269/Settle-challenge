const { getStatus } = require('../controller/health-check.controller');

const healtCheckRoutes = (server) => {
  server.route({
    method: 'GET',
    path: '/healthcheck',
    handler: getStatus,
  });
};

module.exports = healtCheckRoutes;