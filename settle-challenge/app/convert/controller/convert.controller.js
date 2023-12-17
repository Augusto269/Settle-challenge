const {
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_CODE,
  BAD_REQUEST,
  BAD_REQUEST_CODE,
} = require('../../helpers/global.response');
const { postConvertValidation } = require('../controller/convert.validation');
const { getRate } = require('../../rates/services/rates.services');
const { convertRaidAmount } = require('../services/convert.function');
const { getAllConvertedAmount } = require('../services/convert.services');
const {convertedAmountSendMerchantMapping} = require('../helpers/mapping');

const postConvertAmount = async (request, h) => {
  try {
    const validateBody = postConvertValidation.validate(request.payload);
    if (validateBody.error) {
      throw new Error(validateBody.error);
    }
    const { pair, id, amount } = validateBody.value;
    if (!id && !pair) throw new Error('pair or id is required');
    let query = {};
    if (id) query.id = id;
    else query.pair = pair;
    const convertRaid = await getRate(query);
    if (!convertRaid) throw new Error('Rate not found');
    return await convertRaidAmount(convertRaid, amount);
  } catch (error) {
    const message = error.message || error?.details[0]?.message;
    if (message) {
      return h.response({ error: BAD_REQUEST, message: message }).code(BAD_REQUEST_CODE);
    }
    return h.response({ error: INTERNAL_SERVER_ERROR }).code(INTERNAL_SERVER_ERROR_CODE);
  }
};
const getAllConvertAmounts = async (request, h) => {
    try {
      const getRates = await getAllConvertedAmount();
      return getRates.map((rate) => convertedAmountSendMerchantMapping(rate));
    } catch (error) {
      const message = error.message || error?.details[0]?.message;
      if (message) {
        return h.response({ error: BAD_REQUEST, message: message }).code(BAD_REQUEST_CODE);
      }
      return h.response({ error: INTERNAL_SERVER_ERROR }).code(INTERNAL_SERVER_ERROR_CODE);
    }
  };
module.exports = {
  postConvertAmount,
  getAllConvertAmounts,
};
