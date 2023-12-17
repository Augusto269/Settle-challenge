const Rate = require('../model/rates.model');

const createRate = (ratesObject) => {
  const rate = new Rate(ratesObject);
  return rate.save();
};

const getRate = async (searchCondition) => {
    const sortOptions = { createdAt: -1 }; // Last created
    return Rate.findOne({ ...searchCondition }).sort(sortOptions);
    }

const getAllRates = (searchCondition) => {
  return Rate.find({ ...searchCondition });
};

module.exports = {
  createRate,
  getAllRates,
  getRate,
};
