const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a'
});

app.use(morgan('combined', {stream: accessLogStream}));

app.get('/', (req, res) => {
  res.send('hello, world!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`server on port is ${port}`);
});