const ratesSendMapping = (rate) => {
  return {
    id: rate._id.toString(),
    pair: rate.pair,
    originalRate: rate.originalRate,
    feePercentage: rate.feeAmount,
    rateWithMarkup: rate.rateWithMarkup,
  };
};

module.exports = {
    ratesSendMapping,
};
