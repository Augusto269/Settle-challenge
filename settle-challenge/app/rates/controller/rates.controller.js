const { fixerGetRates } = require('../services/fixer.service');
const {
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_CODE,
  BAD_REQUEST,
  BAD_REQUEST_CODE,
} = require('../../helpers/global.response');
const Rate = require('../model/rates.model');
const Joi = require('joi');
const { postRatesValidation } = require('../controller/rates.validation');

const getRates = async (request, h) => {
    return 'Here the rates will be returned.';

};

const postRates = async (request, h) => {
    try {
        console.log(postRatesValidation.validate(request.payload))
        const validateBody = postRatesValidation.validate(request.payload);
        if(validateBody.error){
          throw new Error(validateBody.error);
        }
        const { pair, feePercentage } = validateBody.value;
 
        const fixerRate = await fixerGetRates(pair)
        console.log("fixerRate:::",fixerRate) 
      //  const rate = new Rate({ pair, feePercentage });
        console.log('pair', pair)
        console.log('feePercentage', feePercentage)
        return 'Here the rates will be returned.';

      
      } catch (error) {
        const message = error.message || error?.details[0]?.message;
        if (message) {
          return h.response({ error: BAD_REQUEST, message: message }).code(BAD_REQUEST_CODE);
        }
        return h.response({ error: INTERNAL_SERVER_ERROR }).code(INTERNAL_SERVER_ERROR_CODE);
      }


};


module.exports = {
    getRates,
    postRates,
};

