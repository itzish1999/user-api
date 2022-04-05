const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    console.log('Home Page')
    res.send('Home Page')

});

app.get('/users', (req, res) => {
    console.log('User Page')
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(8080, () => {
    console.log('Node server running on port 8080')
});