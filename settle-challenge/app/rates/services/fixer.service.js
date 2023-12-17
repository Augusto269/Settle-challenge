const { FIXER_BASIC_APP_URL_LATEST, FIXER_API_ACCESS_KEY } = process.env;
const axios = require('axios');
const { ERROR_RESTRICTED } = require('../helpers/enums');

const fixerGetRates = async (baseCurrency, symbols) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  const url = `${FIXER_BASIC_APP_URL_LATEST}?access_key=${FIXER_API_ACCESS_KEY}&base=${baseCurrency}&symbols=${symbols}`;
  const { data } = await axios.get(url, { headers });
  if (data.success === false) {
    if (data.error.type === ERROR_RESTRICTED) {
      const url = `${FIXER_BASIC_APP_URL_LATEST}?access_key=${FIXER_API_ACCESS_KEY}&base=${symbols}&symbols=${baseCurrency}`;
      const { data } = await axios.get(url, { headers });
      if (data.success === false) throw new Error(data.error.type);
      return { ...data, reverse: true };
    }
    throw new Error(data.error.type || 'Unknown error');
  }
  return { ...data, reverse: false };
};
module.exports = {
  fixerGetRates,
};
