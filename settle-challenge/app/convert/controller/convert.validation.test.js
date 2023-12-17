const { postConvertValidation } = require('./convert.validation');

describe('postConvertValidation', () => {
  it('should validate the input object with valid data', () => {
    const validData = {
      pair: 'USDEUR',
      id: '123456789012345678901234',
      amount: 100,
    };

    const { error } = postConvertValidation.validate(validData);
    expect(error).toBeUndefined();
  });

  it('should return an error for missing required fields', () => {
    const invalidData = {
      pair: 'USDEUR',
      id: '123456789012345678901234',
      // amount field is missing
    };

    const { error } = postConvertValidation.validate(invalidData);
    expect(error).toBeDefined();
    expect(error.details[0].message).toContain('"amount" is required');
  });

  it('should return an error for invalid data types', () => {
    const invalidData = {
      pair: 'USDEUR',
      id: 123, // id should be a string
      amount: '100', // amount should be a number
    };

    const { error } = postConvertValidation.validate(invalidData);
    expect(error).toBeDefined();
    expect(error.details[0].message).toContain('"id" must be a string');
  });

  it('should return an error for exceeding maximum length', () => {
    const invalidData = {
      pair: 'USDEUR',
      id: '1234567890123456789012345', // id should not exceed 24 characters
      amount: 100,
    };

    const { error } = postConvertValidation.validate(invalidData);
    expect(error).toBeDefined();
    expect(error.details[0].message).toContain('"id" length must be less than or equal to 24 characters long');
  });
});