const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
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

app.options('*', cors(corsOptions))

app.get('/events', (req, res) => {
    res.send({
        'data': [
            {
                'type': 'events',
                'id': '1',
                'attributes': {
                    'name': 'Grand Old Mansion',
                    'qty-people': 10,
                    'location': 'Sao Paulo',
                    'started-at': '2023-03-03 10:00:00'
                }
            }
        ]
    })
})

app.post('/events', (req, res) => {
    console.log(req.body)
    req.body.data['id'] = '3';
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})