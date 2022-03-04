const express = require('express');
const mysql = require('./08-01-mysql-dotenv');

const app = express();
app.use(express.json({ limit: '50mb' }));


app.listen(3000, () => {
  console.log('server started, port 3000.');
});

app.get('/api/customers', async (req, res) => {
  const customers = await mysql.query('customerList');

  console.log(customers);
  res.send(customers);
});

app.post('/api/customer/insert', async (req, res) => {
  console.log(req.body);

  const result = await mysql.query('customerInsert', req.body.param);
  res.send(result);
})

app.put('/api/customer/update', async (req, res) => {
  console.log(req.body);

  const result = await mysql.query('customerUpdate', req.body.param);

  res.send(result);
})

app.delete('/api/customer/delete/:id', async(req, res) => {
  const { id } = req.params;
  const result = await mysql.query('customerDelete', id);

  res.send(result);
})