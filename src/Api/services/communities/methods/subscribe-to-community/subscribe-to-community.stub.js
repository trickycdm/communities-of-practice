const { SUBSCRIBE_ENDPOINT } = require('../../endpoints.json');

module.exports.stubConfig = {
  route: SUBSCRIBE_ENDPOINT,
  method: 'post',
  middleware: (req, res) => res.json(module.exports.stubData),
};

module.exports.stubData = {
  success: true,
};
