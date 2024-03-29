const URL = require("../models/URL");
const validUrl = require("valid-url");
const shortId = require("shortid");
const redis = require("../db/redis");

async function newUrl(req, res) {
  const url = req.body.url_input;
  const urlCode = shortId.generate();

  // Checking if the url is valid
  if (!validUrl.isWebUri(url)) {
    res.status(401).json({
      error: "Invalid URL",
    });
  } else {
    try {
      // Checking if the url is already in the database
      let nanoUrl = await URL.findOne({
        original_url: url,
      });
      if (nanoUrl) {
        // Caching short code in Redis
        await redis.set(nanoUrl.short_url, nanoUrl.original_url);
        res.json({
          original_url: nanoUrl.original_url,
          short_url: nanoUrl.short_url,
        });
      } else {
        // Creating new one if one does not exist and response with the result
        nanoUrl = new URL({
          original_url: url,
          short_url: urlCode,
        });
        await nanoUrl.save();
        // Caching short code in Redis
        await redis.set(urlCode, url);
        res.json({
          original_url: nanoUrl.original_url,
          short_url: nanoUrl.short_url,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server erorr...");
    }
  }
}

async function getUrl(req, res) {
  try {
    // Pulling short code from params
    const { short_url } = req.params;
    // Looking for short code in Redis
    const storage = await redis.get(short_url);
    // If storage exists in Redis redirect to that stored URL
    if (storage) {
      return res.redirect(storage);
    }
    // Short code was not found in Redis
    const urlParams = await URL.findOne({
      short_url: req.params.short_url,
    });
    // If short code in database redirect user to origional URL
    if (urlParams) {
      redis.set(short_url, urlParams.original_url);
      return res.redirect(urlParams.original_url);
    } else {
      return res.status(404).json("No URL found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
}

module.exports = { newUrl, getUrl };
