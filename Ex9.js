const http = require('http');
const bl = require('bl');
let count = 0;
const str = [];

function printStr () {
    for (let i = 0; i < 3; i++){
        console.log(str[i])
    }
}

function jugglingAsync(url, index){
    http.get(url, function(response){
        response.pipe(bl (function(error, data){
            if(error){
                return console.log(error);
            }
            str[index] = data.toString();
            count++;
            
            if(count === 3){
                printStr();
            }
        }))
    })
}

jugglingAsync(process.argv[2], 0)
jugglingAsync(process.argv[3], 1)
jugglingAsync(process.argv[4], 2)