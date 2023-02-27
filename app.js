const express = require("express")
const apiRoutes = require("./routes/api")
const htmlRoutes = require("./routes/htmlRoutes")

const bodyParser = require("body-parser")

require("./db/connection")
const cors = require("cors")
const app = express()

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use("/s", apiRoutes)
app.use("/", htmlRoutes)

module.exports = app
