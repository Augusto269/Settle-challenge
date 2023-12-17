const axios = require('axios');
const { fixerGetRates } = require('./fixer.service');
const { ERROR_RESTRICTED } = require('../helpers/enums');

jest.mock('axios');

describe('fixerGetRates', () => {
  const baseCurrency = 'USD';
  const symbols = 'EUR';

  it('should return rates when data.success is true', async () => {
    const mockResponse = {
      success: true,
      base: 'USD',
      rates: { EUR: 0.89 },
    };
    axios.get.mockResolvedValueOnce({ data: mockResponse });

    const result = await fixerGetRates(baseCurrency, symbols);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(baseCurrency),
      expect.any(Object)
    );
    expect(result).toEqual({ ...mockResponse, reverse: false });
  });

  it('should return rates in reverse when data.success is false and error type is restricted', async () => {
    const mockResponse = {
      success: false,
      error: { type: ERROR_RESTRICTED },
    };
    const reverseMockResponse = {
      success: true,
      base: 'EUR',
      rates: { USD: 1.12 },
    };
    axios.get.mockResolvedValueOnce({ data: mockResponse });
    axios.get.mockResolvedValueOnce({ data: reverseMockResponse });

    const result = await fixerGetRates(baseCurrency, symbols);

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(baseCurrency),
      expect.any(Object)
    );
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(symbols), expect.any(Object));
    expect(result).toEqual({ ...reverseMockResponse, reverse: true });
  });
  it('should throw and error with the data.success is false and error type is restricted', async () => {
    try {
      const mockResponse = {
        success: false,
        error: { type: 'restricted' },
      };
      const reverseMockResponse = {
        success: true,
        base: 'EUR',
        rates: { USD: 1.12 },
      };
      axios.get.mockResolvedValueOnce({ data: mockResponse });
      axios.get.mockResolvedValueOnce({ data: reverseMockResponse });

      const result = await fixerGetRates(baseCurrency, symbols);
    } catch (error) {
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining(baseCurrency),
        expect.any(Object)
      );
      expect(error.message).toBe('restricted');
    }
  });
});
