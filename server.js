const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mainRouter = require('./routers')
const { logger } = require('./middleware')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(logger)
server.use('/', mainRouter)

module.exports = server