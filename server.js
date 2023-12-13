const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: "*",
    methods: ['Get', 'Post', 'Put', 'Delete']
}))

app.use('/api', (req, res, next) => {
    const books = ['pen', 'paper', 'box', 'box', 'pencil']
    res.status(200).json(books)
})

app.use('/api/re', (req, res, next) => {
    const books = ['pen', 'paper', 'box', 'box', 'pencil']
    res.status(200).json(books)
})

app.listen(3000)