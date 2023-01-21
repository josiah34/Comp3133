var fs = require('fs')


const input_stream = "input_stream.txt"
const output_stream = "output_stream.txt"
var readStream = fs.createReadStream(input_stream)


// Data Available 
readStream.on("data",(rawData) => {
    console.log(rawData.toString())

} )

// Data Read Complete
readStream.on("end", () => {
    console.log("End of Stream")
})

// Error 

readStream.on("error", (err) => {
    console.log(err)
})

// Write Stream

var writeStream = fs.createWriteStream(output_stream)

writeStream.on("finish", () => {
    console.log("Write Stream Complete")
})

writeStream.on("error", (err) => {
    console.log(err)
})

writeStream.write("Hello World")
writeStream.write("Hello World2")
writeStream.write("Hello World3")
writeStream.write("Hello World4")
writeStream.write("Hello World5")


writeStream.end()
