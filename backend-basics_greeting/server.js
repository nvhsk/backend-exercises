import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.setHeader("Content-Type", "text/plain; charset=utf-8");

  response.end("Hello, Iri! 👩🏻‍💻");
});
