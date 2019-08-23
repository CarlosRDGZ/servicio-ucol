const { Router } = require('express')

const router = Router()

router.route('form/:formID/fields/')
  .get((req, res) => {
    res.json({
      foo: 'bar'
    })
  })

module.exports = router