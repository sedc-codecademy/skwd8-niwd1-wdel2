const express = require('express');
const app = express();
const port = 3000;

const usersRouterInfo = require('./routes/users');

app.use(usersRouterInfo.path, usersRouterInfo.router);

app.listen(port, function() {
    console.log(`Server listening on port ${port}...`);
});