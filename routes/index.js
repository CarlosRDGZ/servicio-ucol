const { Router } = require('express')
const form = require('./form')

const routes = Router()

routes.use('/form', form)

routes.route('/')
  .get((_, res) => res.send('Hello, World!'))

module.exports = routes