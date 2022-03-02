const express = require('express');
const app = express();
const port = 3000;

const customerRoute = require('./router/customer');
const productRoute = require('./router/product');

app.route('/customers')
  .get((req, res) => {
    res.send('고객 정보 조회');
  })
  .post((req, res) => {
    res.send('신규 고객 추가');
  })
  .put((req, res) => {
    res.send('고객 정보 수정');
  })
  .delete((req, res) => {
    res.send('고객 정보 삭제');
  });

app.listen(port, () => {
  console.log(`server is start. http://localhost:${port}`);
});

app.use('/customer', customerRoute);
app.use('/product', productRoute);