require("dotenv").config()
const mongoose = require("mongoose")
const uri = process.env.MONGO_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})

const connection = mongoose.connection

module.exports = connection
