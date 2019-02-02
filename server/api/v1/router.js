const router = require('express').Router()
module.exports = router

router.get('/health-check', (req, res) => res.sendStatus(200))


