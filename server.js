const http = require("http");

const server = http.createServer((req, res) => {
  res.end("DevOps App Running and it is the upgraded version as it is running on jenkins using the docker");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});