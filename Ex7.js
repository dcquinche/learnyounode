const http = require('http');
const url = process.argv[2];

function callback(response){
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.error);
    response.on("end", console.log);
}

http.get(url, callback);
