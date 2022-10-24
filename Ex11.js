const http = require('http');
const fs = require('fs');
const server = http.createServer(callback);
const port = process.argv[2];
const file = process.argv[3];


function callback(req, res){
    fs.createReadStream(file).pipe(res);
}

server.listen(Number(port));

