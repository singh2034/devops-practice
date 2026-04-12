const http = require("http");

const server = http.createServer((req, res) => {
  res.end("DevOps App Running and it is the version 4 & automatic ci/cd pipeline");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});