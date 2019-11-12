const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://148.213.20.112:27017/ciema', { useNewUrlParser: true }).catch(console.log)

app.use(routes)

app.listen(3000, () => console.log('Listening...'))