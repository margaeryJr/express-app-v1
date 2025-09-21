const express = require('express');

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

app.use(middlewareLogRequest);

app.use(express.json());

app.use('/users', usersRoutes);


app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
})