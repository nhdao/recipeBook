const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mainRoute = require('./routes/index.js')

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/v1', mainRoute)

app.listen(process.env.SV_PORT, () => {
  console.log(`Server listening on port ${process.env.SV_PORT}`)
})