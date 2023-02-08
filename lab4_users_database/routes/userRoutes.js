const express = require('express')
const userModel = require('../models/userModel.js')
const app = express();
// Josiah Galloway 101296257

// Post - Create a new user
app.post('/users', async (req, res) => {
    const user = new userModel(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(500).send(e.message)}
})

module.exports = app