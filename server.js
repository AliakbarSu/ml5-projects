const express = require('express')
const path = require('path')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

const port = 3000

server.listen(port, () => {
  console.log('Your server is listening on port ', port)
})
