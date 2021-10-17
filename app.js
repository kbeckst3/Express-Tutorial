const http = require('http')
const { readFileSync } = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;

    //home page
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html' });
        res.write('<h1>home page</h1>');
        res.end();
    }
    //about page
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html' });
        res.write('<h1>about page</h1>');
        res.end();
    }
    else {
        res.writeHead(404, {'content-type': 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    }
}).listen(5000)