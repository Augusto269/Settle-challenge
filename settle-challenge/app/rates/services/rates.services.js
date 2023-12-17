const Rate = require('../model/rates.model');

const createRate = (ratesObject) => {
  //The idea is to create a new rate in the database. sending a object with X values and return the new rate created mapping only de correct values
  const rate = new Rate(ratesObject);
  return rate.save();
};

const getAllRates = (searchCondition) => {
  return Rate.find({ ...searchCondition });
};

module.exports = {
  createRate,
  getAllRates,
};
