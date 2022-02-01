const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const postSchema = new Schema({
    project_topic: {
        type: String,
        required: [true, "book must have a name!"]
    },
    author_name: {
        type: String,
        required: [true, "book must have an author!"]
    },
    supervisor_name: {
        type: String,
        required: [true, "book must have a supervisor name!"]
    },
    body: [String],
    ref: [String],
    yearOfPub: {
        type: String,
        select: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Post = model("Post", postSchema);
module.exports = Post;