const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).catch(console.log)

app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log('Listening...'))