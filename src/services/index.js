const product = require('./product/product.service.js');
const users = require('./users/users.service.js');
const images = require('./images/images.service.js');
module.exports = function (app) {
  app.configure(product);
  app.configure(users);
  app.configure(images);
};
