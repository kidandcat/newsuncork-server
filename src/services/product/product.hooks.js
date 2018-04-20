const { authenticate } = require("@feathersjs/authentication").hooks;

const preImage = require('../../hooks/pre-image');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt"), preImage()],
    update: [authenticate("jwt"), preImage()],
    patch: [authenticate("jwt")],
    remove: [authenticate("jwt")]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
