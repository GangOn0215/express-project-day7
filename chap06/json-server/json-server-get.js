import { default as fetch } from "node-fetch";

const fetchProcess = (url) => {
  fetch(url)
  .then((response) => { return response.json(); })
  .then((json) => console.log(json));
}

fetchProcess("http://localhost:3000/comments");
fetchProcess("http://localhost:3000/comments/1");
fetchProcess("http://localhost:3000/comments?postId=1");
fetchProcess("http://localhost:3000/profile");

(async () => {
  const comments = await fetch("http://localhost:3000/comments");
  const commentsJSON = await comments.json();
  console.log(commentsJSON);
})();