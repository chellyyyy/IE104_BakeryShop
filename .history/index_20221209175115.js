const express = require('express')
const app = express()
const port = 3000

// app.set('view engine', 'pug')
// app.set('views', './build/views')
// app.get('/', (req, res) => {
//     res.render('./pages/login')
//     res.use('../../styles/styles.css')
//   })

// Static Files
app.use(express.static('public'));

// Example for other olders
app.use('/css', express.static(__dirname + 'public/css'))







// app.get('/login', (req, res) => {
//     res.send('Hello World!')
//   })





app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});