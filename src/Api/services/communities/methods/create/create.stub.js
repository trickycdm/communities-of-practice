const { CREATE_COMMUNITY_ENDPOINT } = require('../../endpoints.json')

module.exports.stubConfig = {
  route: CREATE_COMMUNITY_ENDPOINT,
  method: 'put',
  middleware: (req, res) => {
    const { name, desc, slug } = req.body
    console.log(req.body)
    if (!name || !desc || !slug) return res.sendStatus(500)
    return res.sendStatus(201)
  },
}

module.exports.stubData = {}
