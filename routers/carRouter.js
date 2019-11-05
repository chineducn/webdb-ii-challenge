const express = require('express')
const db = require('../data/database-config')

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

module.exports = router