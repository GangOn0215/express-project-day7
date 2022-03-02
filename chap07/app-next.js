const express = require('express');
const app = express();
const port = 3000;

app.get('/example', (rea, res, next) => {
  console.log('first callback function');
  next();
}, (req, res) => {
  res.send('second callback function');
});

const ex0 = (req, res, next) => {
  console.log('first callback function');
  next();
}

const ex1 = (req, res, next) => {
  console.log('second callback function');
  next();
}

const ex2 = (req, res) => {
  res.send('third callback function');
}

app.get('/examples', [ex0, ex1, ex2]);

app.listen(port, () => {
  console.log(`server is start. http://localhost:${port}`);
});