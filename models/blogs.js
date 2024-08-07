const mongoose = require('mongoose');
const schema = mongoose.Schema;

// this schema defines the structure of our document
const blogSchema = new schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},{timestamps: true});


// above schema is wrapped with model which provides us easy way to communicates with actual database documents by some methods like save(),find() etc..

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;