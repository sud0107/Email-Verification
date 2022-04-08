const mongoose = require("mongoose");
// const crypto = require("crypt");
// const { timeStamp } = require("console");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 50
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true} )

module.exports = mongoose.model("User", userSchema);