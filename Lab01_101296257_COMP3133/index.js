
// Josiah Galloway 101296257 COMP3133
const fs = require('fs')
const csv = require('csv-parser')

// Check if usa.txt exists along with canada.txt
if (fs.existsSync('canada.txt') && fs.existsSync('usa.txt')) {
    // Delete the files if they exist
    fs.unlinkSync('canada.txt')
    fs.unlinkSync('usa.txt')
}



//Array to store the rows that match the condition
let canadaRows = []
let usaRows = []
fs.createReadStream('input_countries.csv')
  // Use the csv-parser library to parse the file
  .pipe(csv())
  // Use the filter() method to filter out rows that don't match the condition
  .on('data', (row) => {
    if (row.country === 'Canada') {
      canadaRows.push(row)
      console.log(row)
    } else if (row.country === 'United States') {
      usaRows.push(row)
      console.log(row)
    }
  })
    .on('end', () => {
        // Write the filtered rows to a file
      fs.writeFile('canada.txt', JSON.stringify(canadaRows).split("{").join("\n"), (err) => {
        if (err) {
          console.log(err)
        }
      })
        fs.writeFile('usa.txt', JSON.stringify(usaRows).split("{").join("\n"), (err) => {
            if (err) {
                console.log(err)
            }
            })
    })