const express = require('express')
const restaurant = require('../Models/Restaurants.js')
const app = express();



// Create a new restaurant
app.post('/restaurants', async (req, res) => {
    const restaurants = new restaurant(req.body)
    try {
        await restaurants.save()
        res.status(201).send(restaurants)
    } catch (e) {
        res.status(500).send(e.message)}
})

// Find all restaurants and return them
//Comment this out to test task 6 of the lab 
// app.get('/restaurants', async (req, res) => {
//     try {
//         const restaurants = await restaurant.find({})
//         res.send(restaurants)
//     } catch (e) {
//         res.status(500).send()
//     }
//     })

// Return all restaurants by cuisine type
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const restaurants = await restaurant.find({ cuisine: req.params.cuisine })
        res.send(restaurants)
    } catch (e) {
        res.status(500).send()
    }
})

// 6.	Create REST API to return the 
// -	The selected columns must include id, cuisines, name, city, resturant_id
// -	The sorting by the restaurant_id in Ascending or Descending Order based on parameter passed.

app.get('/restaurants', async (request, response) => {
    try {
        const restaurants = await restaurant.find({}).select('id cuisine name city restaurant_id').sort({ restaurant_id: request.query.sortBy })
        response.send(restaurants)
    } catch (e) {
        response.status(500).send(e.message)
    }
})

// Return all restaurants where cuisine is equal to Delicatessen and city is not equal to Brooklyn
app.get('/restaurants/Delicatessen', async (req, res) => {
    try { 
        const restaurants = await restaurant.find({ cuisine: 'Delicatessen', city: { $ne: 'Brooklyn' } })
        res.send(restaurants)
    } catch (e) {
        res.status(500).send(e.message)
    }


})
module.exports = app