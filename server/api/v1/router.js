const router = require('express').Router()
module.exports = router

router.get('/health-check', (req, res) => res.sendStatus(200))
router.post('/users/authenticate', (req, res) => res.json({ id: 1, name: 'Joe' }))
