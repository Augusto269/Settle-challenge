const Joi = require('joi');

const postRatesValidation = Joi.object({
    pair: Joi.string().max(6).required(),
    feePercentage: Joi.number().max(100).required(),
});

module.exports = {
    postRatesValidation
};
