//    Q.1. Read the local directory and list all file names in it using JS.


const fs = require("fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.log(`Error reading directory : ${err}`);
  } else {
    console.log("Files in directory:");
    files.forEach((file) => {
      console.log(file);
    });
  }
});


