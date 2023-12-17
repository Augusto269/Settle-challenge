const { fixerGetRates } = require('../services/fixer.service');
const {
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_CODE,
  BAD_REQUEST,
  BAD_REQUEST_CODE,
} = require('../../helpers/global.response');
const { calculateReserverFee } = require('../helpers/helpers.functions');
const { postRatesValidation } = require('../controller/rates.validation');
const { createRate , getAllRates } = require('../services/rates.services');
const getRates = async (request, h) => {
  try {
    const getRates = await getAllRates();
    return getRates;
  } catch (error) {
    const message = error.message || error?.details[0]?.message;
    if (message) {
      return h.response({ error: BAD_REQUEST, message: message }).code(BAD_REQUEST_CODE);
    }
    return h.response({ error: INTERNAL_SERVER_ERROR }).code(INTERNAL_SERVER_ERROR_CODE);
  }
};

const postRates = async (request, h) => {
  try {
    const validateBody = postRatesValidation.validate(request.payload);
    if (validateBody.error) {
      throw new Error(validateBody.error);
    }
    const { pair, feePercentage } = validateBody.value;
    const baseCurrency = pair.substring(0, 3);
    const converseCurrency = pair.substring(3);
    const fixerRate = await fixerGetRates(baseCurrency, converseCurrency);
    let originalRate;
    if (fixerRate.reverse) {
      originalRate = calculateReserverFee(fixerRate, baseCurrency);
    } else {
      originalRate = fixerRate.rates[pair.substring(3)];
    }
    const feeAmount = (originalRate * feePercentage) / 100;
    const rateWithMarkup = originalRate + feeAmount;
    return await createRate({ pair, originalRate, feePercentage, feeAmount, rateWithMarkup });
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
