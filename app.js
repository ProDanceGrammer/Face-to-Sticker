const express = require('express')
const app = express()
const port = 3000

const users = [{}]


app.get('/user', (req, res) => {
  res.json({
    name: "vasyl", age: "24"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})