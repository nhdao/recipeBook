const express = require('express')
const query = require('./../db/index.js')
const route = express.Router()

route.get('/', async (req, res) => {
  const results = await query('SELECT * FROM recipes', [])

  return res.status(200).json({
    status: 200,
    data: results.rows
  })
})

route.get('/:id')

route.post('/', async (req, res) => {
  const results = await query(
                        'INSERT INTO recipes(name, ingredients, directions) VALUES ($1, $2, $3)', 
                        [req.body.name, req.body.ingredients, req.body.directions])
  return res.status(201).json({
    status: 201,
    data: 'Create OK'
  }).redirect('/')
})

route.put('/:id')

route.delete('/:id')

module.exports = route