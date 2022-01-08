const router = require('express').Router()
const { newUrl, getUrl } = require('../controllers/urlController')

router.post('/nanourl/new', newUrl)
router.get('/nanourl/:short_url?', getUrl)

module.exports = router