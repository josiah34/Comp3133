const express = require('express')
const mongoose = require('mongoose')
const restaurantRouter = require('./Routes/RestaurantsRoutes.js')

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://admin:projectsql123@cluster0.b16uair.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
})

app.use(restaurantRouter);
app.route('/').get((req, res) => {
    res.send("<h1>Lab 3 Josiah Galloway 101296257</h1>")
})
app.listen(8081, () => { console.log('Server is running...') });
