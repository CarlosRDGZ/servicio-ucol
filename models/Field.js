const { model, Schema } = require('mongoose')

const fieldSchema = Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  deleted: {
    type: Boolean,
    default: false
  },
  config: Schema.Types.Mixed
})

module.exports = model('Field', fieldSchema)