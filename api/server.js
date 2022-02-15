const express = require('express');
const { checkToken } = require('../auth');
const app = express();
const { PORT } = require('../config').API;
const db = require('../dbConnection/db');
const auth = require('./components/auth/network');
const movie = require('./components/movie/network');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/auth', auth);
app.use('/api', checkToken);
app.use('/api/movie', movie);

db.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`The app is listening port ${PORT}`);
    });
});