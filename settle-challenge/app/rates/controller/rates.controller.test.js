// const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');
// const { getAllRates } = require('../services/rates.services');

// describe('getRates', () => {
//     let mongoServer;

//   beforeAll(async () => {
//     mongoServer = new MongoMemoryServer();
//     const mongoUri = await mongoServer.getUri();
//     await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
//   });

//   afterAll(async () => {
//     await mongoose.disconnect();
//     await mongoServer.stop();
//   });
//   it('should return all rates', async () => {
//     const mockResponse = [
//         {
//           _id: '657e4908598d98022e6f7488',
//           pair: 'USDEUR',
//           originalRate: 0.9168037288241259,
//           feePercentage: 1,
//           createAt: '2023-12-17T02:02:30.020Z',
//           updateAt: '2023-12-17T02:02:30.020Z',
//         },
//         // ... add more rates if needed
//       ];
//   });
// });

// //   it('should handle errors and return appropriate response', async () => {
// //     // Mock the getAllRates function to throw an error
// //     const mockError = new Error('Something went wrong');
// //     getAllRates.mockRejectedValue(mockError);

// //     // Mock the h object
// //     const h = {
// //       response: jest.fn().mockReturnThis(),
// //       code: jest.fn(),
// //     };

// //     // Call the getRates function
// //     const result = await getRates({}, h);

// //     // Assert that the getAllRates function was called
// //     expect(getAllRates).toHaveBeenCalled();

// //     // Assert that the error response is correct
// //     expect(h.response).toHaveBeenCalledWith({ error: 'Internal Server Error' });
// //     expect(h.code).toHaveBeenCalledWith(500);

// //     // Assert that the result is undefined
// //     expect(result).toBeUndefined();
// //   });
