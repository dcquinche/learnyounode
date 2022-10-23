const http = require('http');
const bl = require('bl');
const url = process.argv[2];

function callback(response){
    response.pipe(bl (function(error, data){
        if(error){
            return console.log(error);
        }
        let str = data.toString();
        console.log(str.length);
        console.log(str);
    }))
}

http.get(url, callback);