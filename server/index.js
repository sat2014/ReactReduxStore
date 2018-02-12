const express = require('express')
const olympics2018_winners_from_norway = require('./olympics2018-norway')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const byName = name => resort =>
    name.toLowerCase() === resort.substr(0, name.length).toLowerCase()

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    .get('/olympics2018_winners_from_norway', (req, res) =>
        res.status(200).json(olympics2018_winners_from_norway)
    )
    .get('/olympics2018_winners_from_norway/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    resorts.filter(byName(req.params.name))
                ),
            delay
        )
    )

app.listen(port, () => console.log('Olympics 2018 Winners from Norway app running on port ' + port + ' with a ' + delay/1000 + ' second delay'))