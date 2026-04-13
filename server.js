const http = require("http");
const client = require("prom-client");

client.collectDefaultMetrics();

const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of requests",
});

const server = http.createServer(async (req, res) => {

  if (req.url === "/metrics") {
    res.setHeader("Content-Type", client.register.contentType);

    const metrics = await client.register.metrics();  // ✅ FIX
    return res.end(metrics);
  }

  requestCounter.inc();

  res.end("DevOps App Running with Metrics + v2");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});