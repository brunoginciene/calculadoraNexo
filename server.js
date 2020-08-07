const express = require('express')
const server = express()

server.use(express.static('static'))

server.get("/", (req, res) => {
    return res.sendFile(__dirname + "/static/index.js")
})

server.listen(5000)