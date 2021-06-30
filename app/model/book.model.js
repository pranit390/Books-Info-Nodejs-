const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    rating:String,
});

module.exports = mongoose.model('books', BookSchema);