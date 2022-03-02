const express = require('express');
const multer = require('multer');
const path = require('path');
const { chdir } = require('process');
const app = express();

app.use(express.json({
  limit: '50mb' //최대 50mb
}));    // 클라이언트 요청 body를 json으로 파싱 처리 

app.listen(3000, () => {
  console.log('Server started. port 3000.');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')  // cb 콜백 함수를 통해 전송된 파일 저장 디렉터리 설정
  },
  filename: (req, file, cb) => {
    cb(null, new Date().valueOf() + path.extname(file.originalname)); //시스템 시간으로 파일 이름 설정
  }
});

const upload = multer({storage: storage});  //multer 객체 생성

app.post('/profile', upload.single('avatar'), (req, res, next) => {
  console.log(req.file);  // avatar 이름의 싱글 파일
  console.log(req.body);  // 일반적인 폼 데이터
});

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {
  console.log(req.files); // photos 이름의 멀티 파일 
});