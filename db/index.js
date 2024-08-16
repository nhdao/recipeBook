const {Pool} = require('pg')
const dotenv  = require('dotenv')

dotenv.config()

// const connectionString = 
//       `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`


const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
})

const query = (text, params) => pool.query(text, params)

module.exports = query