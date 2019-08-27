const { model, Schema } = require('mongoose')

const fieldSchema = Schema({
  formId: {
    type: Number,
    required: true
  },
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

fieldSchema.methods.getPublicFields = function() {
  const { _id, title, required, name, config } = this
  return {
    _id,
    title,
    required,
    name,
    config
  }
}

module.exports = model('Field', fieldSchema)