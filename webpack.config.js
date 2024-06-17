const path = require('path');



module.exports = {
    // entrypoint of file 
    entry: './src/index.js',
    // where should code be bundled
    output:{
       filename: 'index.js',
       path: path.resolve(__dirname, 'dist'),
    }
}