const convertedAmountSendMapping = (converted) => {
  return {
    pair: converted.pair,
    originalAmount: converted.originalAmount,
    convertedAmount: Number(converted.convertedAmount.toFixed(2)), //Normal to a merchant w/ used 2 decimals it's a depend on the currency but we gonna simplified it to 2 decimals
  };
};
const convertedAmountSendMerchantMapping = (converted) => {
  return {
    id: converted._id.toString(),
    pair: converted.pair,
    originalAmount: converted.originalAmount,
    convertedAmount: Number(converted.convertedAmount.toFixed(2)), //Normal to a merchant w/ used 2 decimals it's a depend on the currency but we gonna simplified it to 2 decimals
    createAt: converted.createAt,
  }
}
module.exports = {
  convertedAmountSendMerchantMapping,
  convertedAmountSendMapping,
};
