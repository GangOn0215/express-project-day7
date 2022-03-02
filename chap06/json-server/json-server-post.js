import { default as fetch } from "node-fetch";

fetch("http://localhost:3000/posts", {
  method: "POST",             // HTTP 요청 방법
  body: JSON.stringify({      
    // 전송할 데이터
    title: "The Great",
    author: "Jeremy",
  }),
  headers: {
    //헤더 값 정의
    "content-type": "application/json; charset=UTF-8",
  }
})
  .then((response) => { return response.json() })
  .then(json => console.log(json));