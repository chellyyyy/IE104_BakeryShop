const express = require('express')
const app = express()
const port = 3000

app.set
app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.get('/login', (req, res) => {
    res.send('Hello World!')
  })





app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});