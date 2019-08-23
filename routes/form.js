const { Router } = require('express')

const router = Router()

router.route('/:formID/fields/')
  .get((req, res) => {
    res.json([
      {
        _id: "5d6054f8351bcbefd274a0bd",
        title: "Cipromox",
        required: false,
        name: "dolor",
        config: {
          type: 'number'
        }
      },
      {
        _id: "5d6054f876b841ee1176e945",
        title: "Calcu",
        required: false,
        name: "dolor",
        config: {
          defaultValue: 'Default string'
        }
      },
      {
        _id: "5d6054f847e23edaff226eb6",
        title: "Spacewax",
        required: true,
        name: "sint",
        config: {
          type: 'number',
          minValue: 5,
          maxValue: 10
        }
      },
      {
        _id: "5d6054f8f10b5dfdda7e2ace",
        title: "Idealis",
        required: true,
        name: "aliqua",
        config: {}
      },
      {
        _id: "5d6054f84c8b0b7c82a82444",
        title: "Skyplex",
        required: false,
        name: "do",
        config: {}
      }
    ])
  })

module.exports = router