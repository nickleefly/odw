var assert = require('assert'),
    request = require('request');

describe('/', function () {
  it('should return 200 homePage', function (done) {
    request.get('http://localhost:3000', function (err, res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('/users', function () {
  it('should return 200 Users Page', function (done) {
    request.get('http://localhost:3000/users', function (err, res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should return 200 Male Page', function (done) {
    request.get('http://localhost:3000/users/m', function (err, res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should return 200 Female Page', function (done) {
    request.get('http://localhost:3000/users/f', function (err, res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('/graph', function () {
  it('should return 200 homePage', function (done) {
    request.get('http://localhost:3000/graph', function (err, res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});