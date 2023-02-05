const router = require("express").Router()
const { newUrl, getUrl } = require("../controllers/urlController")
router.post("/", newUrl)
router.get("/:short_url?", getUrl)

module.exports = router
