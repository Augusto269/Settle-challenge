const ConvertAmount = require('../model/convert.model');
const createConvertedAmount = (ConvertObject) => {
  const rate = new ConvertAmount(ConvertObject);
  return rate.save();
};

const getAllConvertedAmount = (searchCondition) => {
    return ConvertAmount.find({...searchCondition});
  };

module.exports = {
  createConvertedAmount,
  getAllConvertedAmount,
};
