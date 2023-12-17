const ratesSendMapping = (rate) => {
  return {
    id: rate._id.toString(),
    pair: rate.pair,
    originalRate: rate.originalRate,
    feeAmount: rate.feeAmount,
    feePercentage: rate.feePercentage,
    rateWithMarkup: rate.rateWithMarkup,
  };
};

module.exports = {
    ratesSendMapping,
};
