const { postConvertAmount,getAllConvertAmounts } = require('../controller/convert.controller');

const convertRoutes = (server) => {
  server.route({
    method: 'POST',
    path: '/convert',
    handler: postConvertAmount,
  });

  server.route({
    method: 'GET',
    path: '/convert',
    handler: getAllConvertAmounts,
  });
};

module.exports = convertRoutes;
