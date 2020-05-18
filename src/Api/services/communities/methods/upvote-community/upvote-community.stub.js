const { UPVOTE_ENDPOINT } = require('../../endpoints.json');

module.exports.stubConfig = {
  route: UPVOTE_ENDPOINT,
  method: 'post',
  middleware: (req, res) => res.json(module.exports.stubData),
};

module.exports.stubData = {
  success: true,
};
