// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const crypto = require("crypto");

module.exports = function(options = {}) {
  // eslint-disable-line no-unused-vars
  return async context => {
    const imagesService = context.app.service("images");
    const hashedImages = context.data.images.map(i => {
      const hashedImage = hash(i);
      imagesService.create({
        id: hashedImage,
        data: i
      });
      return hashedImage;
    });
    context.data.images = hashedImages;
    return context;
  };
};

function hash(data) {
  return crypto
    .createHash("md5")
    .update(data)
    .digest("hex");
}
