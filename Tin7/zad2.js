const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('zad2.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Error: File Not Found");
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/submit' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString(); // konwersja Buffer na string
        });
        req.on('end', () => {
            const name = new URLSearchParams(body).get('name'); // Pobranie wartości name
            fs.writeFile('name.txt', name, (err) => { // Zapis do pliku
                if (err) {
                    console.error(err);
                    res.writeHead(500);
                    res.end("Error writing to file");
                } else {
                    res.writeHead(302, { 'Location': '/' }); // Przekierowanie
                    res.end();
                }
            });
        });
    } else {
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1>');
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

