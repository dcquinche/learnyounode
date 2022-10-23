const fs = require("fs");
const path = require("path");

module.exports = function (dir, ext, callback) { 

  function filterExt (error, data) {
    if (error) {
      return callback(error);
    }
    
    const filterList = data.filter((file) => {
      return path.extname(file) === `.${ext}`;
    });
    callback(null, filterList);
  }

  fs.readdir(dir, "utf-8", filterExt);
};