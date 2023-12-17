const { calculateReserverFee } = require('./helpers.functions');

describe('calculateReserverFee', () => {
  it('should calculate the reserve fee correctly', () => {
    const fixerRate = {
      rates: {
        USD: 1.23,
        EUR: 0.89,
      },
    };
    const converseCurrency = 'USD';

    const result = calculateReserverFee(fixerRate, converseCurrency);

    expect(result).toBeCloseTo(0.813008, 6);
  });

  it('should handle invalid converse currency', () => {
    const fixerRate = {
      rates: {
        USD: 1.23,
        EUR: 0.89,
      },
    };
    const converseCurrency = 'GBP';

    const result = calculateReserverFee(fixerRate, converseCurrency);

    expect(result).toBeNaN();
  });
});