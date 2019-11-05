const express = require('express')
const carsRouter = require('./carRouter')

const router = express.Router()

router.use('/api/cars', carsRouter)

module.exports = router