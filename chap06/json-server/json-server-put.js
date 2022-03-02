import { default as fetch } from "node-fetch";

fetch("http://localhost:3000/posts/2", {
  method: "PUT",             // HTTP 요청 방법
  body: JSON.stringify({      
    // 전송할 데이터
    id: 2,
    title: "The Great Jeremy",
    author: "Jeremy",
  }),
  headers: {
    //헤더 값 정의
    "content-type": "application/json; charset=UTF-8",
  }
})
  .then((response) => { return response.json() })
  .then(json => console.log(json));