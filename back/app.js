const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const port = 8000
const db = require('./db')

var corsOptions = {
    origin: process.env.HOST_ORIGIN,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
    next()
})

app.options('*', cors(corsOptions))

app.delete('/events/:id', async (req, res) => {
    let result = await db.query('SELECT * FROM public.events where id = $1',[req.params.id??0])
    let row = result.rows[0]

    let data = {
        'type': 'events',
        'id': row.id,
        'attributes': {
            'name': row.name,
            'qty-people': row.qty_people,
            'location': row.location,
            'started-at': new Date(row.started_at).toLocaleString('pt-BR').replace(',', '')
        }
    }

    try {
        result = await db.query(`DELETE FROM events where id = $1`, [
            req.params.id??0
        ])
    } catch (e) {
        res.status(500).json({
            error: true,
            msg: e.message
        })
    }

    res.send({
        'data': data
    })
})

app.patch('/events/:id', async (req, res) => {
    let result
    try {
        result = await db.query(`UPDATE events SET name = $1, qty_people =$2, location = $3 where id = $4`, [
            req.body.data.attributes.name,
            req.body.data.attributes['qty-people'],
            req.body.data.attributes.location,
            req.params.id??0
        ])
    } catch (e) {
        res.status(500).json({
            error: true,
            msg: e.message
        })
    }

    res.send(req.body)
})

app.get('/events/:id', async (req, res) => {
    let result = await db.query('SELECT * FROM public.events where id = $1',[req.params.id??0])
    let row = result.rows[0]

    let data = {
        'type': 'events',
        'id': row.id,
        'attributes': {
            'name': row.name,
            'qty-people': row.qty_people,
            'location': row.location,
            'started-at': new Date(row.started_at).toLocaleString('pt-BR').replace(',', '')
        }
    }

    res.send({
        'data': data
    })
})

app.get('/events', async (req, res) => {
    let rows = []; result = await db.query('SELECT * FROM public.events order by name')
    result.rows.forEach(row => {
        rows.push({
            'type': 'events',
            'id': row.id,
            'attributes': {
                'name': row.name,
                'qty-people': row.qty_people,
                'location': row.location,
                'started-at': new Date(row.started_at).toLocaleString('pt-BR').replace(',', '')
            }
        })
    })

    res.send({
        'data': rows
    })
})

app.post('/events', async (req, res) => {
    let result
    try {
        req.body.data.attributes['started-at'] = new Date()
        result = await db.query(`INSERT INTO public.events (name, qty_people, location, started_at) VALUES ($1,$2,$3,$4) RETURNING id`, [
            req.body.data.attributes.name,
            req.body.data.attributes['qty-people'],
            req.body.data.attributes.location,
            req.body.data.attributes['started-at']
        ])
    } catch (e) {
        res.status(500).json({
            error: true,
            msg: e.message
        })
    }

    req.body.data['id'] = result.rows[0].id;
    res.send(req.body)
})

app.listen(port, () => {
    db.query(`CREATE TABLE IF NOT EXISTS public.users (
        id serial4 NOT NULL,
        "name" varchar(150) NOT NULL,
        email varchar(250) NOT NULL,
        pass varchar(150) NULL,
        created_at timestamp NOT NULL,
        uipdated_at timestamp NULL,
        CONSTRAINT users_pk PRIMARY KEY (id)
    );`);
    db.query(`CREATE TABLE IF NOT EXISTS public.events (
        id serial4 NOT NULL,
        "name" varchar(150) NOT NULL,
        qty_people varchar(250) NOT NULL,
        location varchar(150) null,
        started_at timestamp NOT NULL,
        CONSTRAINT events_pk PRIMARY KEY (id)
    );`);
    console.log(`Example app listening on port ${port}`)
})