import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.end("first fish 🐠");
  }
  if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end("second fish 🐡");
  } else {
    response.statusCode = 404;
    response.end("no fish found 🫧");
  }
});
