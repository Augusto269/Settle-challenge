const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
  pair: String,
  originalRate: Number,
  rate: Number,
  feeAmount: Number,
  rateWithMarkup: Number,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Rate', rateSchema);