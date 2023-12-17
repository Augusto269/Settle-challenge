const { convertedAmountSendMapping } = require('./mapping');

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
