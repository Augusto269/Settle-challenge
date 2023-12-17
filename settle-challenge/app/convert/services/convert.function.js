const { createConvertedAmount } = require('../services/convert.services');
const { convertedAmountSendMapping } = require('../helpers/mapping');
const convertRaidAmount = async (convertRaid, amount) => {
  try {
    const convertedAmount = convertRaid.rateWithMarkup * amount;
    const convertRaidAmount = await createConvertedAmount({
      pair: convertRaid.pair,
      originalAmount: amount,
      convertedAmount: convertedAmount,
      rateUsed: convertRaid._id,
    });
    return convertedAmountSendMapping(convertRaidAmount);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  convertRaidAmount,
};
