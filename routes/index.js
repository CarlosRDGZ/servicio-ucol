const { Router } = require('express')
const form = require('./form')
const cors = require('cors')

const routes = Router()

routes.use(cors({
  origin: 'http://localhost:3000'
}))
routes.use('/form', form)

routes.route('/')
  .get((_, res) => res.send('Hello, World!'))

module.exports = routes