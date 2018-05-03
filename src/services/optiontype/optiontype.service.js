// Initializes the `optiontype` service on path `/optiontype`
const createService = require('feathers-sequelize');
const createModel = require('../../models/optiontype.model');
const hooks = require('./optiontype.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'optiontype',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/optiontype', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('optiontype');

  service.hooks(hooks);
};
