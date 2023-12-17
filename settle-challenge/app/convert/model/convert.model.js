const mongoose = require('mongoose');

/**
 * Represents the convert schema.
 *
 * @typedef {Object} ConvertSchema
 * @property {string} pair - The currency pair.
 * @property {number} originalAmount - The original amount to be converted.
 * @property {number} convertedAmount - The converted amount.
 * @property {mongoose.Schema.Types.ObjectId} rateUsed - The ID of the rate used for conversion.
 * @property {Date} createAt - The creation date of the conversion.
 */

const convertSchema = new mongoose.Schema({
  pair: { type: String, required: true },
  originalAmount: { type: Number, required: true },
  convertedAmount: { type: Number, required: true },
  rateUsed: { type: mongoose.Schema.Types.ObjectId, required: true },
  createAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('ConvertAmount', convertSchema);
