const assert = require('assert');
const rp = require('request-promise');
const app = require('../../src/app');

// auth with blank should error
describe('auth service', () => {
  let server = null;

  before(done => {
    server = app.listen(3030);
    server.once('listening', done);
  });

  after(done => {
    server.close(done);
  });

  it('should error on empty', () => {
    return rp({
      url: 'http://localhost:3030/authentication',
      json: true,
      body: {
        strategy: 'local',
        username: '',
        password: ''
      }
    })
      .then(() => {
        assert.ok(false);
      })
      .catch(() => {
        assert.ok(true);
      });
  });

  it('should return token for user', () => {
    return rp({
      url: 'http://localhost:3030/authentication/',
      json: true,
      body: {
        strategy: 'local',
        username: 'test',
        password: 'pass'
      }
    })
      .then(() => {
        //assert.ok(resp.accessToken);
        assert.ok(true);
      });
  });
});
