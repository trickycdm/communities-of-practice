const { SUBSCRIBE_ENDPOINT } = require('../../endpoints.json');

module.exports.stubConfig = {
  route: SUBSCRIBE_ENDPOINT,
  method: 'post',
  middleware: (req, res) => res.sendStatus(201),
};

module.exports.stubData = {};
