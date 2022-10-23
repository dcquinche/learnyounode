const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = process.argv[3];

function callback(error, data){
    if (error) {
        console.log(error);
    }

    data.forEach(file => {
        if (path.extname(file) === `.${ext}`)
            console.log(file);
    });
}

fs.readdir(dir, 'utf-8', callback);