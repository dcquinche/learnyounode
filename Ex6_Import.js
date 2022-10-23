const moduleDir = require('../learnyounode/Ex6_Export.js') 
const dir = process.argv[2];
const ext = process.argv[3];

function callback(error, data){
    if(error){
        return console.log(error);
    }
    data.forEach(element => {
        console.log(element);
    });
}
moduleDir(dir, ext, callback);