// pull all our env confs here. Required to make things MUCH easier to manage
// https://www.keycloak.org/docs/3.3/securing_apps/topics/oidc/nodejs-adapter.html
require('dotenv').config()
require('dotenv-safe').config()
// add our custom module paths first so we can use a nicer require
require('app-module-path').addPath(`${__dirname}/libs`)
const log = require('log')

;(async function main () {
  try {
    // Pre-loading any pages and api libraries rather than searching for them at runtime
    global._root = __dirname
    // express init
    const express = require('express')
    const app = express()
    app.set('port', process.env.NODE_PORT || 3000)

    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // Cookies and session. CMS user details are stored in JWT token
    app.use(require('cookie-parser')(process.env.SALT))

    app.use('/api', require(`./api/router`))
    // Start our node server
    app.listen(app.get('port'), () => log('log', `Server started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`))
    // we should never need this but helpful if there is a rouge unhandled rejection
    process.on('unhandledRejection', err => {
      err.message += 'UNHANDLED PROMISE REJECTION: ' + err.message
      log('error', err)
    })
  } catch (err) {
    log('error', err)
    process.exit(1) //eslint-disable-line no-process-exit
  }
})()
