const express = require('express');
const mongodb = require('./mongoose');
const Customer = require('./mongoose/schemas/customer');
const port = 3000;

const app = express();
app.use(express.json());

mongodb.connect();    //MongoDB Connect

app.listen(port, () => {
  console.log(`Server started. port ${port}`);
});

app.get("/customers", async (req, res) => {
  const customers = await Customer.find();

  console.log(customers);
  res.send(customers);
});

app.post('/customer/insert', async (req, res) => {
  const reqData = req.body;
  const insertedData = await Customer.create(reqData);
  
  console.log(insertedData);
  res.send(insertedData);
});

app.put('/customer/update', async (req, res) => {
  const reqData = req.body;
  const userData = await Customer.findOne({ name: 'John Doe' }).exec();
  const updatedDataID = await Customer.findByIdAndUpdate(userData.id, {phone: '010-1222-3434'});
  const updatedDataOne = await Customer.updateOne({name: userData.name}, {address: 'seoul'});

  // console.log(updatedDataID);
  // res.send(updatedDataID);

  console.log(updatedDataOne);
  res.send(updatedDataOne);
});

app.delete('/customer/delete', async (req, res) => {
  const reqData = req.body;
  // const deletedMany = await Customer.deleteMany({name: /Jeremy/ }); //name에 'Jeremy'가 포함된 모든 문서 삭제
  const deletedOne = await Customer.deleteOne({name: 'Jeremy Go'});

  console.log(deletedOne);
  res.send(deletedOne);
})