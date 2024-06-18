const path = require('path');



module.exports = {
    // entrypoint of file 
    entry: './src/index.js',
    // where should code be bundled
    output:{
       filename: 'index.js',
       libraryTarget: "umd",
       path: path.resolve(__dirname, 'dist'),
    }
}