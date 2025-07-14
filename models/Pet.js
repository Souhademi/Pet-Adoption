// models/Pet.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: String,
    type: String, // e.g., dog, cat
    age: Number,
    description: String,
    image: String // filename
});

module.exports = mongoose.model('Pet', petSchema);