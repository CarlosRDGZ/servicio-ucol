const { Router } = require('express')
const bodyParser = require('body-parser')
const { Error: { DocumentNotFoundError } } = require('mongoose')
const { Field } = require('../models')


const errorSelecter = error => {
  switch (error) {
    case 'SyntaxError': return {
      code: 400, data: {
        status: 'fail',
        message: 'Request body incorrect format'
      }
    }
    case 'ValidationError': return {
      code: 400, data: {
        status: 'fail',
        message: error.message,
        data: error.errors
      }
    }
    case 'CastError': return {
      code: 404, data: {
        status: 'fail',
        message: 'Field not found',
        data: null
      }
    }
    case 'DocumentNotFoundError': return {
      code: 404, data: {
        status: 'fail',
        message: 'Field not found',
        data: null
      }
    }
    case 'MongoNetworkError': return {
      code: 500, data: {
        status: 'error',
        message: 'Could no reach the database'
      }
    }
    default: return {
      code: 500, data: {
        status: 'error',
        message: error.message
      }
    }
  }
}

const router = Router()

const fieldFormat = '_id title required name config'

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
router.use((err, req, res, next) => {
  if (err) {
    const { code, data } = errorSelecter(err)
    res.status(code).json(data)
  }
  else {
    next()
  }
})

router.route('/:formID/fields/')
.get(async (req, res) => {
  try {
    const { formId } = req.params
    const fields = await Field.find({ deleted: false, formId: formId }, fieldFormat)
    res.json({
      status: 'success',
      data: fields
    })
  } catch (e) {
    const { code, data } = errorSelecter(e)
    res.status(code).json(data)
  }
})
.post(async (req, res) => {
  try {
    const field = await new Field(req.body).save()
    res.status(201).json({
      status: 'success',
      data: field.getPublicFields()
    })
  } catch (e) {
    const { code, data } = errorSelecter(e)
    res.status(code).json(data)
  }
})

router.route('/:formID/fields/:fieldId')
  .get(async (req, res) => {
    try {
      const { fieldId } = req.params
      const field = await Field.findOne({ _id: fieldId, deleted: false }, fieldFormat)

      if (!field)
        throw new DocumentNotFoundError()

      res.json({
        status: 'success',
        data: field.getPublicFields()
      })
    } catch (e) {
      const { code, data } = errorSelecter(e)
      res.status(code).json(data)
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params
      const field = await Field.findOne({ _id: id, deleted: false })

      if (!field)
        throw new DocumentNotFoundError()

      const { completed, title } = req.body
      field.completed = completed
      field.title = title

      const newField = await field.save()

      res.json({
        status: 'success',
        data: newField.getPublicFields()
      })
    } catch (e) {
      const { code, data } = errorSelecter(e)
      res.status(code).json(data)
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params
      const field = await Field.findOne({ _id: id, deleted: false })

      if (!field)
        throw new DocumentNotFoundError()

      field.deleted = true
      await field.save()

      res.sendStatus(204)
    } catch (e) {
      const { code, data } = errorSelecter(e)
      res.status(code).json(data)
    }
  })

module.exports = router