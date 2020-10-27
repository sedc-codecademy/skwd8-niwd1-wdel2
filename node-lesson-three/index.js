const express = require('express');
const app = express();
const port = 3000;

app.get('/flights/:from-:to', function(req, res) {
    const params = req.params;
    console.log('Get is called for /about!', params);
    res.status(200);
    res.send('Hello there!');
});

app.listen(port, function() {
    console.log(`Server listening on port ${port}...`);
});