const { FIXER_BASIC_APP_URL_LATEST, FIXER_API_ACCESS_KEY } = process.env;
const axios = require('axios');
const { ERROR_RESTRICTED } = require('../helpers/enums');

const fixerGetRates = async (pair) => {
  const baseCurrency = pair.substring(0, 3);
  const symbols = pair.substring(3);
  console.log('baseCurrency', baseCurrency);
  console.log('symbols', symbols);
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  // Swap the values dynamically

  const url = `${FIXER_BASIC_APP_URL_LATEST}?access_key=${FIXER_API_ACCESS_KEY}&base=${baseCurrency}&symbols=${symbols}`;
  console.log('url', url)
  const { data } = await axios.get(url, { headers });
  if (data.success === false) {
    if (data.error.type === ERROR_RESTRICTED) {
      const url = `${apiUrl}?access_key=${apiKey}&base=${symbols}&symbols=${baseCurrency}`;
      const { data } = await axios.get(url, { headers });
      if (data.success === false) {
        throw new Error(data.error.type);
      }
      return data;
    }
    throw new Error(data.error.type);
  }
  return data;
};
module.exports = {
  fixerGetRates,
};
