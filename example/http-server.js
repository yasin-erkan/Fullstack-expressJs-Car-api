const http = require("http");

// Create server
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Hello from server!" }));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

// Create port
const port = 3001;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
