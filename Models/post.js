const mongoose = require('mongoose');

const postModel = new mongoose.Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:'user',
    },
    authorUsername : String,
    postDescription : String,
    image: String,
    likes: [{
        personLiked: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'user',
        }
    }],
    comments: [
        {
            type : mongoose.Schema.ObjectId,
            ref: 'comment'
        },
    ],
});

module.exports = mongoose.model('Post', postModel);
