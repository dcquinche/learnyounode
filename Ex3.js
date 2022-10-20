const fs = require('fs')
let buf = fs.readFileSync(process.argv[2])
let str = buf.toString()
let linesArray = str.split("\n")
let count = linesArray.length -1

console.log(count)