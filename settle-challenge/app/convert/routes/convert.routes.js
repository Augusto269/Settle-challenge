const { postConvertAmount,getAllConvertAmounts } = require('../controller/convert.controller');
const Joi = require('joi');
const convertRoutes = (server) => {
  server.route({
    method: 'POST',
    path: '/convert',
    handler: postConvertAmount,
    options: {
      description: 'Convert an amount',
      notes: 'Convert an amount based on the provided request payload',
      tags: ['api', 'convert'],
      validate: {
        payload: Joi.object({
          pair: Joi.string(),
          id: Joi.string(),
          amount: Joi.number().required(),
        }),
      },
      response: {
        schema: Joi.object({
          convertedAmount: Joi.number(),
          pair: Joi.string(),
          originalAmount: Joi.number(),
        }),
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/convert',
    handler: getAllConvertAmounts,
    options:{
      description: 'Get all converted amounts',
      notes: 'Returns all converted amounts',
      tags: ['api', 'convert'],
      response: {
        schema: Joi.array().items(
          Joi.object({
            id: Joi.string(),
            pair: Joi.string(),
            originalAmount: Joi.number(),
            convertedAmount: Joi.number(),
            createAt: Joi.date(),
          })
        ),
      },
    }
  });
};

module.exports = convertRoutes;
