const express = require('express')
const apiRoutes = require('./routes/api')
const bodyParser = require('body-parser')

require('./db/connection')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())
app.use(express.json())

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})