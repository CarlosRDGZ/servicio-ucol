const { Router } = require('express')
const fields = require('./fields')

const routes = Router()

routes.use('/fields', fields)

routes.route('/')
  .get((_, res) => res.send('Hello, World!'))

module.exports = routes