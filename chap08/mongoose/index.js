const mongoose = require('mongoose');

const connect = () => {
  if(process.env .NODE_ENV !== 'production') {  // 운영 환경이 아닌 개발 환경일 때만
    mongoose.set('debug', true);    // 콘솔에서 쿼리 내용을 확인 할 수 있도록 디버그 모드 활성화
  }

  // mongodb://[username]:[password]@host:port_number/databases
  mongoose.connect('mongodb://root:1234@localhost:27017/admin', {
    dbName: 'dev',
  }, (error) => {
    if(error) {
      console.log('MongoDB connect error', error);
    } else {
      console.log('MongoDB connect success', 'localhost:27017/admin');
    }
  });
};

mongoose.connection.on('error', (error) => {  // MongoDB 연결 시 에러가 있을 때 발생하는 이벤트에 대한 Listener
  console.log('MongoDB connect error', error);
})

mongoose.connection.on('disconnected', () => {
  console.error('MongoDB 연결이 종료되어 연결을 재시도 합니다.');
  connect();
});

module.exports = {
  connect
};

