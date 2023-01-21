var fs = require('fs')
console.log("Week 02- File Handling")



// Reading File

fs.readFile("input.txt", (err, data) => {
    if(err){
        console.log(err)

    }
    console.log(`Async: \n${data.toString()}`)
})



console.log("Start Async")
var data = fs.readFileSync("input.txt")
console.log(`Sync: \n${data.toString()}`)
console.log("End Async")