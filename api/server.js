const express = require("express")

const carsRouter = require('./cars/cars-router')

const server = express()
// DO YOUR MAGIC
server.use(express.json());

server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's do this!</h2>`);
});

server.use('*', (req, res) => {
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` })
})

module.exports = server
