const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000

var corsOptions = {
    origin: process.env.HOST_ORIGIN,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

app.options('*',cors(corsOptions))

app.get('/', (req, res) => {
    res.send({
        campo: 'valor'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})