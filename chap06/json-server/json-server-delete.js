import { default as fetch } from "node-fetch";

fetch("http://localhost:3000/posts/2", { method: "DELETE" });