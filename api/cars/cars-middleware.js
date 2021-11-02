const Car = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const possible = await Car.getById(req.params.id)
    if(possible) {
      req.car = possible
      next()
    } else {
      next({ status: 404, message: `car with id ${req.params.id} is not found` })
    }
  }catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body
  if(vin === undefined){
    res.status(400).json({ message: `vin is missing` })
  }else if( make === undefined){
    res.status(400).json({ message: `make is missing` })
  }else if( model === undefined){
    res.status(400).json({ message: `model is missing` })
  }else if( mileage === undefined){
    res.status(400).json({ message: `mileage is missing` })
  }else{
    req.vin = vin
    req.make = make
    req.model = model
    req.mileage = mileage
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin} = req.body
  const isValidVin = vinValidator.validate(vin)
  if(isValidVin){
    next()
  } else {
    res.status(400).json({ message: `vin ${vin} is invalid` })
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}