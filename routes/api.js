const router = require('express').Router()
const urlController = require('../controllers/urlController')

router.post('/nanourl/new', urlController)

module.exports = router