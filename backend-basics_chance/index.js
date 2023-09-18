import { server } from "./server.js";

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} 👾`);
});
