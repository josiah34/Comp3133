var fs = require('fs')

const header = "eid, name, salary"
const file_name = "emp.csv"

fs.writeFileSync(file_name, header)



var data = "\n1001, John, 10000"

fs.writeFileSync(file_name, data, {flag: 'a'})

var data = "\n1002, Josiah, 1000000"

fs.writeFileSync(file_name, data, {flag: 'a'})


var data = fs.readFileSync(file_name)
console.log(`\n${data.toString()}`)


// Delete File
//fs.unlinkSync(file_name)