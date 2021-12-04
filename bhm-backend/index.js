const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bhmData', {
    useNewUrlParser: true, useUnifiedTopology: true
})

const app = express();
app.use(express.urlencoded({ extended: true }))

const NotifRouter = require('./routes/notifs');

app.use('/v1/users', NotifRouter);

app.get('/', (req, res) => res.send('Welcome'));
app.get('*', (req, res) => res.send('This route does not exist'));

app.listen(process.env.PORT || 5000, () => console.log("server starting"));