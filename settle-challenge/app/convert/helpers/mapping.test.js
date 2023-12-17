const { convertedAmountSendMapping } = require('./mapping');
const { convertedAmountSendMerchantMapping } = require('./mapping');

describe('convertedAmountSendMapping', () => {
  it('should return the mapped object with converted amount rounded to 2 decimals', () => {
    const converted = {
      pair: 'USDEUR',
      originalAmount: 100,
      convertedAmount: 91.68,
    };

    const expected = {
      pair: 'USDEUR',
      originalAmount: 100,
      convertedAmount: 91.68,
    };

    const result = convertedAmountSendMapping(converted);

    expect(result).toEqual(expected);
    expect(result.convertedAmount).toBeCloseTo(expected.convertedAmount, 2);
  });
});

describe('convertedAmountSendMapping', () => {
  it('should return the mapped object with converted amount rounded to 2 decimals', () => {
    const converted = {
      pair: 'USDEUR',
      originalAmount: 100,
      convertedAmount: 91.68,
    };

    const expected = {
      pair: 'USDEUR',
      originalAmount: 100,
      convertedAmount: 91.68,
    };

    const result = convertedAmountSendMapping(converted);

    expect(result).toEqual(expected);
  });

  it('should round the converted amount to 2 decimals', () => {
    const converted = {
      pair: 'USDEUR',
      originalAmount: 100,
      convertedAmount: 91.681234,
    };

    const expected = {
      pair: 'USDEUR',
      originalAmount: 100,
      convertedAmount: 91.68,
    };

    const result = convertedAmountSendMapping(converted);

    expect(result).toEqual(expected);
  });
});

describe('convertedAmountSendMerchantMapping', () => {
  it('should return the mapped object with converted amount rounded to 2 decimals', () => {
    const converted = {
      _id: '123',
      pair: 'USDEUR',
      originalAmount: 100,
      convertedAmount: 91.681234,
      createAt: '2022-01-01',
    };

    const expected = {
      id: '123',
      pair: 'USDEUR',
      originalAmount: 100,
      convertedAmount: 91.68,
      createAt: '2022-01-01',
    };

    const result = convertedAmountSendMerchantMapping(converted);

    expect(result).toEqual(expected);
  });
});