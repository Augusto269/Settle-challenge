const convertedAmountSendMapping = (converted) => {
  return {
    pair: converted.pair,
    originalAmount: converted.originalAmount,
    convertedAmount: Number(converted.convertedAmount.toFixed(2)), //Normal to a merchant w/ used 2 decimals it's a depend on the currency but we gonna simplified it to 2 decimals
  };
};


module.exports = {
  convertedAmountSendMapping,
};
