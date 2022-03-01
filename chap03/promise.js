/**
 * 
 * Promise는 자바스크립트에서 비동기 처리에 사용되는 객체
 * then() 함수를 통해서 그 결과에 대한 코드를 실행할 수 있게 해준다.
 * Promise는 new 생성자 함수를 사용해서 생성
 * 요청에 응답에 성공하면 resolve();
 * 용청에 대한 응답에 실패하면 reject(); 함수에 에러를 전달
 */
const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve("결과 데이터");
  } else {
    reject(new Error("에러"));
  }
})