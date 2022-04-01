const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')


app.get('/', (req, res) => {
    console.log('Home Page')
    res.send('Home Page')

});

app.use(basicAuth({
    users: {'admin': 'skltpsyxm786786'}

}));


app.get('/user', (req, res) => {
    console.log('User Page')
    res.send('User page')
});

app.listen(8080, () => {
    console.log('Node server running on port 8080')
});