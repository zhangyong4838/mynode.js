const fs = require('fs');
const readStream = fs.readStream('./static/2')
const writeStream = fs.createWriteStream('./static/3')

readStream.pipe(writeStream)

