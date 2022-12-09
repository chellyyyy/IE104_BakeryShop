const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
// app.set('views', './build/views')
app.set('views', './public/views');

// Static Files
app.use(express.static('./public'));

// app.get('', (req, res) => {
//     res.sendFile(__dirname + '/public/login.html')
//   })
app.get('', (req, res) => {
    res.render('/page/login.html')
  })






// app.get('/login', (req, res) => {
//     res.send('Hello World!')
//   })





app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});