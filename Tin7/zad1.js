const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const footballClubs = ["FC Barcelona", "Real Madrid", "Manchester United", "Liverpool FC", "Bayern Munich"];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const filePath = path.join(__dirname, parsedUrl.pathname === '/' ? 'zad1.html' : parsedUrl.pathname);

    if (req.method === 'GET') {
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end("Error: File Not Found");
            } else {
                let contentType = 'text/html';
                if (filePath.endsWith('.css')) {
                    contentType = 'text/css';
                }
                res.writeHead(200, { 'Content-Type': contentType + '; charset=utf-8' });
                res.end(content, 'utf-8');
            }
        });
    } else if (req.method === 'POST' && parsedUrl.pathname === '/draw') {
        const randomClub = footballClubs[Math.floor(Math.random() * footballClubs.length)];
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`
            <html>
            <head>
                <title>Wylosowany Klub</title>
                <meta charset="UTF-8">
                <style>
                    body, html {
                        height: 100%;
                        margin: 0;
                        font-family: 'Arial', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: linear-gradient(45deg, #6db3f2, #1e69de);
                    }
                    .centered-container {
                        text-align: center;
                        background: white;
                        padding: 40px;
                        border-radius: 8px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                        width: 300px;
                    }
                </style>
            </head>
            <body>
                <div class="centered-container">
                    <h1>Wylosowany klub: ${randomClub}</h1>
                    <a href="/">Powrót</a>
                </div>
            </body>
            </html>
        `);
    } else {
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1>');
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




