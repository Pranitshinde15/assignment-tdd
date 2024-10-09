const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('POST /add', () => {
//   it('returns 0 for an empty string', async () => {
//     const res = await request(app).post('/add').send({ numbers: "" });
//     expect(res.status).to.equal(200);
//     expect(res.body.result).to.equal(0);
//   });

    // it('returns the number, one number is provided', async () => {
    //     const res = await request(app).post('/add').send({ numbers: "1" });
    //     expect(res.status).to.equal(200);
    //     expect(res.body.result).to.equal(1);
    // });

    it('returns the sum of two numbers separated by a comma', async () => {
        const res = await request(app).post('/add').send({ numbers: "1,5" });
        expect(res.status).to.equal(200);
        expect(res.body.result).to.equal(6);
    });
});
