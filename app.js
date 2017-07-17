const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const config = require('./config/database')
const app = express();

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log(`connected to database ${config.database}`);
})

mongoose.connection.on('connected', () => {
  console.log(`connected to database ${config.database}`);
})
const users = require('./routes/users');

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users,', users)

app.get('/', (req, res) => {
  res.send('homepage')
})


app.listen(port,() => {
  console.log(`server started at ${port}`);
});
