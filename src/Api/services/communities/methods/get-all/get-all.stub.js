const { GET_ALL_COMMUNITIES_ENDPOINT } = require('../../endpoints.json')

module.exports.stubConfig = {
  route: GET_ALL_COMMUNITIES_ENDPOINT,
  method: 'get',
  middleware: (req, res) => res.json(module.exports.stubData),
}

module.exports.stubData = [
  {
    slug: 'javascript',
    name: 'Javascript',
    description: 'All things JavaScript, not just limited to React!',
    users: [
      {
        name: 'Col Mack',
        email: 'col.mack@cybg.com'
      },
      {
        name: 'Arun Iyer',
        email: 'arun@cybg.com'
      },
    ]
  },
  {
    slug: 'java',
    name: 'Java',
    description: 'All the cool stuff Java offers!',
    users: [
      {
        name: 'Col Mack',
        email: 'col.mack@cybg.com'
      }
    ]
  }
]
