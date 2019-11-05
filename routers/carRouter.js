const express = require('express')
const db = require('../data/database-config')
const { validateCarId } = require('../middleware')

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            if (cars.length) {
                res.status(200).json(cars)
            }
            else {
                res.status(404).json({message: "There are no saved cars."})
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "There was an error getting the data from the database" + " " + error
            })
        })
})

router.get('/:id', validateCarId, (req, res) => {
    res.status(200).json(req.car)
})

router.post('/', (req, res) => {
    db('cars').insert({
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmissionType: req.body.transmissionType,
        titleStatus: req.body.titleStatus
    })
        .then(newId => {
            db('cars').where({ id: newId[0] })
                .then(car => {
                    res
                        .status(201)
                        .json(car[0])
                })
                .catch(error => {
                    res
                        .status(500)
                        .json({
                        message: "There was an error getting the new car from the database" + " " + error
                    })
                })
        })
        .catch(error => {
            res
                .status(500)
                .json({
                message: "There was an error adding the car to the list." + " " + error
            })
        })
})


module.exports = router