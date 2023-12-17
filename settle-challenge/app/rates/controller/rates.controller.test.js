// const { getAllRates } = require('../services/rates.services');

// describe('getRates', () => {
//   it('should return all rates', async () => {
//     // Mock the getAllRates function to return a sample response
//     const mockResponse = [{ currency: 'USD', rate: 1.23 }, { currency: 'EUR', rate: 0.89 }];
//     getAllRates.mockResolvedValue(mockResponse);

//     // Mock the h object
//     const mockedObject = {
//       response: jest.fn().mockReturnThis(),
//       code: jest.fn(),
//     };

//     // Call the getRates function
//     const result = await getRates({}, mockedObject);

//     // Assert that the getAllRates function was called
//     expect(getAllRates).toHaveBeenCalled();

//     // Assert that the response is correct
//     expect(result).toEqual(mockResponse);

//     // Assert that the response code is not called
//     expect(mockedObject.code).not.toHaveBeenCalled();
//   });

//   it('should handle errors and return appropriate response', async () => {
//     // Mock the getAllRates function to throw an error
//     const mockError = new Error('Something went wrong');
//     getAllRates.mockRejectedValue(mockError);

//     // Mock the h object
//     const h = {
//       response: jest.fn().mockReturnThis(),
//       code: jest.fn(),
//     };

//     // Call the getRates function
//     const result = await getRates({}, h);

//     // Assert that the getAllRates function was called
//     expect(getAllRates).toHaveBeenCalled();

//     // Assert that the error response is correct
//     expect(h.response).toHaveBeenCalledWith({ error: 'Internal Server Error' });
//     expect(h.code).toHaveBeenCalledWith(500);

//     // Assert that the result is undefined
//     expect(result).toBeUndefined();
//   });
// });