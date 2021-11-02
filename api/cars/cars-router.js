// DO YOUR MAGIC
const express = require('express');
const Car = require('./cars-model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Car.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'somthing tragic inside the router happend',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router