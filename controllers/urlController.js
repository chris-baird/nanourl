const URL = require('../models/URL')
const validUrl = require('valid-url')
const shortId = require('shortid')

async function newUrl(req, res) {
  const url = req.body.url_input
  const urlCode = shortId.generate()

  // checking if the url is valid
  if (!validUrl.isWebUri(url)) {
    res.status(401).json({
      error: 'Invalid URL'
    })
  } else {
    try {
      // checking if the url is already in the database
      let nanoUrl = await URL.findOne({
        original_url: url
      })
      if (nanoUrl) {
        res.json({
          original_url: nanoUrl.original_url,
          short_url: nanoUrl.short_url
        })
      } else {
        // Creating new one if one does not exist and response with the result
        nanoUrl = new URL({
          original_url: url,
          short_url: urlCode
        })
        await nanoUrl.save()
        res.json({
          original_url: nanoUrl.original_url,
          short_url: nanoUrl.short_url
        })
      }
    } catch (err) {
      console.error(err)
      res.status(500).json('Server erorr...')
    }
  }
}

module.exports = newUrl