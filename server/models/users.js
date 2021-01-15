const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    pantry: [],
    favorites: []
});

module.exports = mongoose.model('food-hunt', userSchema, 'food-hunt')