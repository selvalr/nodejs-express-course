const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welocome home');
    }
    if (req.url === '/about') {
        res.end('welcome abouthistroy')
    }
    res.end(`
   <h1>selva</h1>
   <p>nfbjbvjsb</p>
   <a href="/">back home</a>`)
}).listen(8080);