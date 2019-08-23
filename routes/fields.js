const { Router } = require('express')

const router = Router()

router.route('/:formID')
  .get((req, res) => {
    res.json({
      foo: 'bar'
    })
  })

module.exports = router