const { JobRepository } = require('../repositories');
const sequelize = require('../database/pg');
const { jobs } = require('../__mocks__/mock');

describe('Start unit test for update job function', () => {
  // Run one-time
  let jobRepository;
  beforeAll(async () => {
    await sequelize.authenticate();

    jobRepository = new JobRepository();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('Test CreateJob function()', () => {
    test('data is OK, Should return 1', async () => {
      const jobId = 6;
      const job = jobs[0];

      const result = await jobRepository.updateJobById(jobId, job);
      expect(result).toEqual(true);
    });

    // is OK
    // Id job is undefined => should return 403
    // Id job is null => should return 403
    // Id Job is not found => expect return 404
    // title is null
    // title is undefined => should return 404
    // level is null => should return 404
    // level is undefined => should return 404
    // salaryType is null => should return 404
    // salaryType is undefined => should return 404
    // startDate is null => should return 404
    // startDate is undefined => should return 404
    // endDate is null => should return 404
    // endDate is undefined => should return 404
    // status is null => should return 404
    // status is undefined => should return 404
  });
});
