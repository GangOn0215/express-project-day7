const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
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
  },
  store: new fileStore()
}));

app.get('/', (req, res, next) => {
  console.log(req.session);
  res.send(res.session);
});

app.post('/login', (req, res, next) => {
  const {email, pw} = req.body.param;

  // 데이터베이스의 사용자 테이블에서 로그인 인증 처리 코드 작성
  // 사용자가 존재하면 ( 로그인 처리 성공하면 )
  req.session.email = email;      // 세션에 사용자 이메일 정보 저장
  req.session.is_logined = true;  // 세션에 로그인 여부 저장
  req.session.save(err => {       // 세션 저장
    if(err) throw err;
    res.redirect('/home');   // 로그인 후 홈화면으로 이동
  })
});

app.post('/logout', (req, res, next) => {
  req.session.destroy();    // destroy() 함수를 사용해서 세션 삭제
  res.redirect('/login');   // 로그인 페이지로 이동
})

app.listen(port, () => {
  console.log(`server is start. http://localhost:${port}`);
});