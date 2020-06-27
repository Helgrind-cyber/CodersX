const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/user', (req, res) => {
    res.send('Nguyenb Hong Quan');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
