const http = require("http");
const client = require("prom-client");

// collect default metrics (CPU, memory, etc.)
client.collectDefaultMetrics();

const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of requests",
});

const server = http.createServer((req, res) => {
  if (req.url === "/metrics") {
    res.setHeader("Content-Type", client.register.contentType);
    return res.end(client.register.metrics());
  }

  requestCounter.inc();

  res.end("DevOps App Running with Metrics 🚀");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});