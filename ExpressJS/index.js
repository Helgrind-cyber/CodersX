const express = require('express')
const app = express()
const port = 3000

var users = [
    { name: 'quan', age: 23, gender: 'male' },
    {name: 'nam', age: 18, gender: 'female'},
    {name: 'bac', age: 6, gender: 'unimpossible'}
]

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/user', (req, res) => {
    res.render('users/index', {
        users: users
    })
})

app.get('/user/search', (req, res) => {
    var q = req.query.q
    var matchedUsers = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    console.log(matchedUsers)

    res.render('users/index', {
        users: matchedUsers
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
