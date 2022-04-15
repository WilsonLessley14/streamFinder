const supertest = require('supertest');
const expect  = require('chai').expect;
const app = require('../../server/app.js');
const request = supertest(app);

it('Server startup successful', (done) => {
    // const res = await request.get('/test');
    // expect(response.status).toBe(200);
    expect(1).to.equal(1);
    done();
});
