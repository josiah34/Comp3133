const mongoose = require("mongoose");

// Create a schema for the user and the fields that are required and the data type. Also add validation for the fields.
const UserSchema = new mongoose.Schema({
     name: {
        type: String,
        required: [true, "Please enter a name"],
     },
     username: {
        type: String,
        required: [true, "Please enter a username"],
        minlength: [4, "Username must be at least 4 characters"],
        },
    email: {
        type: String,
        required: [true, "Please enter a email"],
        match : [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please enter a valid email address"],
    },
    address: {
        street: {
            type: String,
            required: [true, "Please enter a street"],
        },
        suite: {
            type: String,
            required: [true, "Please enter a suite"],
        },
        city: {
            type: String,
            required: [true, "Please enter a city"],
            match : [/^[a-zA-Z]+$/, "Please enter a valid city"],
        },
        zipcode: {
            type: String,
            required: [true, "Please enter a zipcode"],
            match : [/^\d{5}-\d{4}$/, "Please enter a valid zipcode"],
        },
        geo: {
            lat: {
                type: String,
                required: [true, "Please enter a lat"],
            },
            lng: {
                type: String,
                required: [true, "Please enter a lng"],
            },
        },

    }, 
    phone: {
        type: String,
        required: [true, "Please enter a phone number"],
        match : [/^\d{1}-\d{3}-\d{3}-\d{4}$/, "Please enter a valid phone number"],
    },
    website: {
        type: String,
        required: [true, "Please enter a website"],
        match : [/^((http|https):\/\/)/, "Please enter a valid website"],
    },
    company: {
        name: {
            type: String,
            required: [true, "Please enter a company name"],
        },
        catchPhrase: {
            type: String,
            required: [true, "Please enter a catch phrase"],
        },
        bs: {
            type: String,
            required: [true, "Please enter a bs"],
        },
    }

});

const users = mongoose.model("Users", UserSchema);
module.exports = users;
