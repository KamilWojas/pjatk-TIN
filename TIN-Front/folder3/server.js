const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('form.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url.startsWith('/submit') && req.method === 'GET') {
        const queryObject = url.parse(req.url, true).query;
        fs.writeFile('data.txt', queryObject.data, err => {
            if (err) {
                res.writeHead(500);
                res.end('Error writing to file');
            } else {
                res.writeHead(302, { 'Location': '/' });
                res.end();
            }
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
