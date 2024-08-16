const express = require('express')
const query = require('./../db/index.js')
const route = express.Router()

route.get('/', async (req, res) => {
  try {
    const results = await query('SELECT * FROM recipes', [])
  
    return res.status(200).json({
      status: 200,
      data: results.rows
    })
  } catch (err) {
    res.send(err)
  }
})

route.get('/:id', async (req, res) => {
  try {
    const results = await query('SELECT * FROM recipes WHERE id = $1', [req.params.id])
  
    return res.status(200).json({
      status: 200,
      data: results.rows
    })
  } catch(err) {
    res.send(err)
  }
})

route.post('/', async (req, res) => {
  try {
    const results = await query(
                          'INSERT INTO recipes(name, ingredients, directions) VALUES ($1, $2, $3)', 
                          [req.body.name, req.body.ingredients, req.body.directions])
    return res.status(201).json({
      status: 201,
      data: 'Create OK'
    })
  } catch(err) {
    res.send(err)
  }
})



route.put('/update/:id', async (req, res) => {
  try {
    const results = await query('UPDATE recipes SET name = $1, ingredients = $2, directions = $3 WHERE id = $4',
      [req.body.name, req.body.ingredients, req.body.directions, req.params.id]
    )
  
    return res.status(201).json({
      status: 201,
      data: 'Create OK'
    })
  } catch(err) {
    res.send(err)
  }
})

route.delete('/delete/:id', async (req, res) => {
  try {
    const results = await query('DELETE FROM recipes WHERE id = $1', [req.params.id])
  
    return res.status(200).json({
      status: 200,
      data: results.rows
    })
  } catch(err) {
    res.send(err)
  }
})

module.exports = route