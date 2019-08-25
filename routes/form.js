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
          type: 'text',
          defaultValue: 'Default string'
        }
      },
      {
        _id: "5d6054f847e23edaff226eb6",
        title: "Spacewax",
        required: true,
        name: "sint",
        config: {
          type: 'range',
          minValue: 5,
          maxValue: 10
        }
      },
      {
        _id: "5d6054f8f10b5dfdda7e2ace",
        title: "Idealis",
        required: true,
        name: "aliqua",
        config: {
          type: 'text'
        }
      },
      {
        _id: "5d6054f84c8b0b7c82a82444",
        title: "Skyplex",
        required: false,
        name: "do",
        config: {
          type: 'tel'
        }
      },
      {
        _id: "5d6054f84c8b0b7c82a82333",
        title: "Radio 1",
        required: true,
        name: "radio1",
        config: {
          type: 'radio',
          items: [
            'Perro',
            'Gato',
            'Ganzo'
          ]
        }
      },
      {
        _id: "5d6054f84c8b0b7c82a82222",
        title: "Radio 2",
        required: false,
        name: "radio2",
        config: {
          type: 'radio',
          items: [
            'Toalla',
            'Almohada',
            'Taza'
          ],
          defaultValue: 'Taza'
        }
      },
      {
        _id: "5d6054f84c8b0b7c82a82111",
        title: "Checkbox 1",
        required: true,
        name: "checkbox1",
        config: {
          type: 'checkbox',
          items: [
            'Opcion 1',
            'Opcion 2',
            'Opcion 3'
          ]
        }
      },
      {
        _id: "5d6054f84c8b0b7c82a81111",
        title: "Checkbox 1",
        required: true,
        name: "checkbox2",
        config: {
          type: 'checkbox',
          items: [
            'me gusta la zanahoria',
            'me gusta la papa',
            'me gusta la brocoli'
          ]
        }
      },
      {
        _id: "5d6054f84c8b0b7c82a80000",
        title: "Select 1",
        required: false,
        name: "select1",
        config: {
          type: 'select',
          items: [
            'Patriots',
            'Colts',
            'Broncos',
            'Saints'
          ]
        }
      }
    ])
  })

module.exports = router