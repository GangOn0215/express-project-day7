const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://example.com',
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/products/:id', (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
})

app.listen(7777, () => {
  console.log('CORS-enabled web server listening on port 80');
})
