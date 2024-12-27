const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Define backend servers
const servers = [
    { url: 'http://localhost:3000' },
    { url: 'http://localhost:3001' },
    { url: 'http://localhost:3002' },
];

let current = 0;

// Create proxy middleware
const proxy = createProxyMiddleware({
    target: servers,
    changeOrigin: true,
    xfwd: true,
    router: (req) => {
        // Select backend server based on a simple round-robin algorithm
        // const server = servers.shift();
        // servers.push(server);
        // return server.url;

        //Round-robin mix singleton
        const server = servers[current];
        current = (current + 1) % servers.length;
        return server.url
    },
});

// Create load balancer server
const server = http.createServer((req, res) => {
    proxy(req, res);
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Load balancer running on port ${port}`);
});