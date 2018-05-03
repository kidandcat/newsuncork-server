const assert = require('assert');
const app = require('../../src/app');

describe('\'optiontype\' service', () => {
  it('registered the service', () => {
    const service = app.service('optiontype');

    assert.ok(service, 'Registered the service');
  });
});
