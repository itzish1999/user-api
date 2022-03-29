const express = require('express')
const app = express()

app.get('/users', (req, res) => {
    res.end('User page');
});

app.listen(8080, () => {
    console.log('Node server running on port 8080')
});