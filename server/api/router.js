const router = require('express').Router()
const uuidv4 = require('uuid/v4')
const log = require('log')
module.exports = router

router.use('/v1', require('./v1/router'))

// 404 handler. If we get here with no error no route has matched.
router.use((req, res) => res.sendStatus(404))

// ERRORS global error handling middleware MUST come last and MUST have 4 args
router.use((err, req, res, next) => {
  const supportId = uuidv4()
  const date = new Date()
  err.message = `${date} - ${supportId}: ${err.message}`
  log('error', err)
  return res.status(500).json({
    layout: 'error-page',
    message: 'Sorry something went wrong on our side',
    supportId
  })
})
