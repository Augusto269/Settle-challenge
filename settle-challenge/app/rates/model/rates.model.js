const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
  pair: String,
  originalRate: Number,
  feePercentage: Number,
});

module.exports = mongoose.model('Rate', rateSchema);