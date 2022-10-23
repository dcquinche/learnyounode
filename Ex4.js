const fs = require('fs')

function callback(error, data){
    if(error){
        return console.log(error)
    }

    let str = data.toString()
    let linesArray = str.split("\n")
    let count = linesArray.length -1
    console.log(count)
    
}

fs.readFile(process.argv[2],'utf8', callback)
