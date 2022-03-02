const cookieSession = require('cookie-session');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`server is start. http://localhost:${port}`);
});

app.use(cookieSession({
  name: 'session',
  keys: [/* secret keys */],
  maxAge: 24 * 60 * 60 * 1000 //24시간 유지
}));
