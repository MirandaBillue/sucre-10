const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {type:String, required:true},
    author: String,
    image: String,
    body: String
 }, {
        timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;