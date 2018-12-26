//Libreria de Node para crear Servidores
const http = require('http');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    let salida = {
        nombre: 'jhon',
        edad: 23,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('puerto 8080');