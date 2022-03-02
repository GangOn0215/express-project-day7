const compression = require('compression');
const express = require('express');
const app = express();
const port = 3000;

// 응답하는 모든 데이터가 압축 됩니다.
app.use(compression);

// 클라이언트로 요청받는 라우터가 /api/getMap인 경우에 대해서만 응답 데이터를 압축합니다.
app.use('/api/getMap', compression);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`server is start. http://localhost:${port}`);
});