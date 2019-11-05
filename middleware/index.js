module.exports = {
    logger: logger,
}


function logger(req, res, next) {
    console.log(`${req.method} Request was made to path ${req.url} at ${Date().toLocaleString()}`);
    next();
}