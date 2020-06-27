const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/user', (req, res) => {
    res.render('users/index', {
        users: [
            { name: 'Quan', age: 23, gender: 'male' },
            {name: 'Quan', age: 18, gender: 'female'},
            {name: 'Quan', age: 6, gender: 'unimpossible'}
        ]
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
