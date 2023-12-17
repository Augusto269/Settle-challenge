const { getRates, postRates } = require('../controller/rates.controller');
const Joi = require('joi');
const ratesRoutes = (server) => {
  server.route({
    method: 'GET',
    path: '/rates',
    handler: getRates,
    options: {
      description: 'Get all rates',
      notes: 'Returns all rates',
      tags: ['api', 'rates'],
      response: {
        schema: Joi.array().items(
          Joi.object({
            _id: Joi.string(),
            pair: Joi.string(),
            originalRate: Joi.number(),
            feePercentage: Joi.number(),
            createAt: Joi.string(),
            updateAt: Joi.string(),
          })
        ),
      },
      
    },
  });

  server.route({
    method: 'POST',
    path: '/rates',
    handler: postRates,
    options: {
      description: 'Create a new rate',
      notes: 'Create a new rate in the database',
      tags: ['api', 'rates'],
      validate: {
        payload: Joi.object({
          pair: Joi.string().required(),
          originalRate: Joi.number().required(),
          feePercentage: Joi.number().required(),
        }),
      },
      response: {
        schema: Joi.object({
          _id: Joi.string(),
          pair: Joi.string(),
          originalRate: Joi.number(),
          feePercentage: Joi.number(),
          createAt: Joi.string(),
          updateAt: Joi.string(),
        }),
      },
    },
  });
};

module.exports = ratesRoutes;
