var fs = require('fs')

fs.open("input.txt", 'r+', (err, fd) => {
    if(err){
        console.log(err)
        return
    }
    var bufferData =  Buffer.alloc(100)
    fs.read(fd, bufferData, 0 , bufferData.length, 0 , (err, n, bytes) => {
     console.log(bufferData.toString())
     console.log(err, n, bytes.toString())
    })
    //Writing to file
    var bufferToWrite = Buffer.from("GBC")
    fs.write(fd, bufferToWrite, (err, n, bytes) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("\nWrite Successful")
    })

    fs.close(fd, ()=>{
        console.log("File Closed")
    })

    
})