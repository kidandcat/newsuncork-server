const assert = require('assert');
const app = require('../../src/app');

describe('\'optionType\' service', () => {
  it('registered the service', () => {
    const service = app.service('option-type');

    assert.ok(service, 'Registered the service');
  });
});
