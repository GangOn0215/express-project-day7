/**
 * 
 * Async/Await 역시 Promise와 동일한 목적으로 사용
 * Async: 비동기로 실행을 뜻한다
 * Await: 비동기를 실행하는데 결과가 올 때까지 기다리겠다는 의미
 * 
 * Async/Await는 같은 스코프에서 결과 값을 관리할 수 있기 때문에 훨씬 효율적인 코드를 구현할 수 있게 해준다.
 * 
 */

async function myFunc() {
  const r = await asyncFunc();
}

const myFunc2 = async () => {
  const r = await asyncFunc();
}