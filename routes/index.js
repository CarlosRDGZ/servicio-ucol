const { Router } = require('express')

const routes = Router()

routes.route('/')
  .get((_, res) => res.send('Hello, World!'))

module.exports = routes