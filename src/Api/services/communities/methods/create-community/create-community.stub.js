const { CREATE_COMMUNITY_ENDPOINT } = require('../../endpoints.json');

module.exports.stubConfig = {
  route: CREATE_COMMUNITY_ENDPOINT,
  method: 'put',
  middleware: (req, res) => res.json(module.exports.stubData),
};

module.exports.stubData = {
  success: true,
};
