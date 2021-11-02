// DO YOUR MAGIC
const express = require('express');
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid } = require('./cars-middleware');
const Car = require('./cars-model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Car.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(next)
})

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.car)
} )

router.post('/',
 checkCarPayload,
 checkVinNumberUnique,
 checkVinNumberValid,
 async (req, res, next) => {
    try{
        const car = await Car.create(req.body)
        res.json(car)
    }catch(err){
        next(err)
    }
})

module.exports = router