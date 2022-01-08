const router = require('express').Router()

router.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

module.exports = router