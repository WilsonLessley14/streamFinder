const supertest = require('supertest');
const expect  = require('chai').expect;
const app = require('../../server/app.js');
const request = supertest(app);

it('Testing to see if Jest works ', () => {
    expect(1).to.equal(1)
})

