require('../db/connection')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    original_url: String,
    short_url: String
})

const URL = mongoose.model("URL", urlSchema);

module.exports = URL