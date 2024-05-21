const createServer = require('../utils/server-test');
const { sequelize } = require('../database/pg');
const supertest = require('supertest');
const { jobs } = require('../__mocks__/mock');

describe('Start unit test for update job API', () => {
  let app;
  let server;

  beforeAll(() => {
    sequelize.authenticate();
    app = createServer();
    server = app.listen(5002); // Ensure the server is listening on a port
  });

  afterAll(() => {
    sequelize.close();
    server.close(); // Close the server after tests
  });

  test('data is OK, Should return status 200', async () => {
    const jobId = '77rJraD'; // assuming jobId should be an integer
    const job = jobs[0];

    const response = await supertest(app).patch(`/${jobId}`).send(job).expect(200);

    expect(response.body).toEqual({
      statusCode: 200,
      data: true,
      message: 'OK',
    });
  });
});
