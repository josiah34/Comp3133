var fs = require('fs')
var zlib = require('zlib')


const input_stream = "input_stream.txt"
const output_stream = "output_stream.txt"
var readStream = fs.createReadStream(input_stream)


var writeStream = fs.createWriteStream (output_stream)


readStream.pipe(writeStream)

// zip using pipe

readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("input_stream.txt.gz"))