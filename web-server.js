const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8091;
const WEB_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
};

const server = http.createServer((req, res) => {
    let filePath = req.url.split('?')[0];
    if (filePath === '/') filePath = '/registro-televisiones.html';
    filePath = path.join(WEB_DIR, decodeURIComponent(filePath));

    // Security: prevent directory traversal
    if (!filePath.startsWith(WEB_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>404 - Archivo no encontrado</h1>');
            return;
        }
        res.writeHead(200, {
            'Content-Type': contentType,
            'Access-Control-Allow-Origin': '*'
        });
        res.end(data);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('==========================================');
    console.log('  AQL Web Server - Control de Calidad');
    console.log('==========================================');
    console.log('  Local:  http://localhost:' + PORT);
    console.log('  Red:    http://192.168.80.149:' + PORT);
    console.log('  PB:     http://192.168.80.103:8090');
    console.log('==========================================');
    console.log('  Presiona Ctrl+C para detener');
    console.log('==========================================');
});
