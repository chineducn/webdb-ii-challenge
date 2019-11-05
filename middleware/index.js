const db = require('../data/database-config')

module.exports = {
    logger: logger,
    validateCarId: validateCarId,
}


function validateCarId(req, res, next) {
    db('cars').where({ id: req.params.id })
        .then(car => {
            req.car = car[0];
            next();
        })
        .catch(error => {
            res.status(500).json({message: "There was an error getting the car." + " " + error})
        })
}

function logger(req, res, next) {
    console.log(`${req.method} Request was made to path ${req.url} at ${Date().toLocaleString()}`);
    next();
}