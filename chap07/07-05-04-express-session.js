const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: true,
    maxAge: 60000
  }
}));

app.listen(port, () => {
  console.log(`server is start. http://localhost:${port}`);
});
