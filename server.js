const http = require("http");

const server = http.createServer((req, res) => {
  res.end("DevOps App Running and it is the version 5 & automatic ci/cd pipeline test 2");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});