const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const { PORT, MONGODB_URI } = require('./config.json')

const MONGO_URI = process.env.MONGODB_URI || MONGODB_URI
const PORT_ = process.env.PORT || PORT

const app = express()

mongoose.connect(MONGO_URI, { useNewUrlParser: true }).catch(console.log)

app.use(routes)

app.listen(PORT_, () => console.log('Listening...'))