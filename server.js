const http = require("http");

const server = http.createServer((req, res) => {
  res.end("DevOps App Running and it is the upgraded version as it is running on jenkins using the docker");
  res.end("Let's check it again with the upgraded version which is version 2");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});