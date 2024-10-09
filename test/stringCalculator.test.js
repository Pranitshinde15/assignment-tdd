const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('POST /add', () => {
  it('returns 0 for an empty string', async () => {
    const res = await request(app).post('/add').send({ numbers: "" });
    expect(res.status).to.equal(200);
    expect(res.body.result).to.equal(0);
  });
});
