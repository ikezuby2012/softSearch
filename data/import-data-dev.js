const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Post = require("../models/postModel");

dotenv.config({
    path: "./config.env"
});

mongoose.connect(process.env.DATABASE_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("database connected");
});

//READ JSON FILE
const posts = JSON.parse(fs.readFileSync(`${__dirname}/post.json`, "utf-8"));

//import data to database
const importData = async () => {
    try {
        await Post.create(posts);
        console.log("DB loaded successfully");
    } catch (err) {
        console.log(err)
    }
    process.exit(1);
};

const deleteData = async () => {
    try {
        await Post.deleteMany();
    } catch (err) {
        console.log(err);
    }
    process.exit(1);
};

if (process.argv[2] === "--import") {
    importData();
}
if (process.argv[2] === "--delete") {
    deleteData();
}
console.log(process.argv);