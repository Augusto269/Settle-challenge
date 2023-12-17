const Joi = require('joi');

const postConvertValidation = Joi.object({
    pair: Joi.string().max(6),
    id: Joi.string().max(24),
    amount: Joi.number().required(),
});

module.exports = {
    postConvertValidation
};
