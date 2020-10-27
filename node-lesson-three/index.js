const express = require('express');
const app = express();
const port = 3000;


app.route('/users')
    .get(function(req, res) {
    res.send('Hello GET!');
    })
    .post(function(req, res) {
        res.send('Hello POST!');
    });

app.listen(port, function() {
    console.log(`Server listening on port ${port}...`);
});