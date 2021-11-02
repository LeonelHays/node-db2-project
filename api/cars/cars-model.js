const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (car_id) => {
  // DO YOUR MAGIC
  return db('cars')
    .where({ car_id })
    .first();
}

const create = (car) => {
  // DO YOUR MAGIC
  return db('cars')
    .insert(car)
    .then(ids => {
      return getById(ids[0])
    })
}


module.exports = {
  getAll,
  getById,
  create
}