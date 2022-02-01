
const Post = require("../models/postModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllPosts = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Post.find(), req.query).filter().sort().limitFields().paginate();
    const posts = await features.query;

    res.status(200).json({
        status: 'success',
        results: posts.length,
        data: posts
    })
});

exports.createPost = catchAsync(async (req, res, next) => {
    const newPost = await Post.create(req.body);

    // if (!newPost) {
    //     return next(new AppError("post does not exist", 404));
    // }

    res.status(201).json({
        status: "success",
        data: newPost

    });

})

exports.getPost = catchAsync(async (req, res, next) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        return next(new AppError('no Post found with that ID', 404));
    }
    res.status(200).json({
        status: "success",
        data: post
    });
});

exports.deletePost = catchAsync(async (req, res, next) => {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!inv) {
        return next(new AppError("No post found with that Id", 404));
    }
    res.status(204).json({
        status: "successful",
        data: null
    })
});

exports.updatePost = catchAsync(async (req, res, next) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!post) {
        return next(new AppError('unable to update post', 404));
    }

    res.status(201).json({
        status: "successful",
        data: post
    });
});

//this function is when the main query will be done
exports.searchPost = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new AppError("operation failed!", 403));
    }
    const regex = new RegExp(id, 'i');
    console.log(id, regex);

    const data = await Post.aggregate([
        {
            $match: {
                $or: [
                    { project_topic: { "$regex": id, $options: "i" } },
                    { author_name: { $regex: id, $options: "i" } },
                    { body: { "$regex": id, $options: "i" } }
                ]
            }
        },
        {
            $group: {
                _id: "$_id",
                project_topic: { "$first": "$project_topic" },
                author_name: { "$first": "$author_name" },
                body: { "$first": "$body" },
                ref: { "$first": "$ref" },
                yearOfPub: { "$first": "$yearOfPub" }
            }
        }
    ]);

    res.status(201).json({
        status: "success",
        data
    });
});

exports.queryPostByProjectTopic = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new AppError("operation failed!", 403));
    }

    const data = await Post.aggregate([
        {
            $match: {
                project_topic: {
                    "$regex": id, $options: "i"
                }
            }
        }
    ]);

    res.status(200).json({
        status: "success",
        data
    })
});

exports.queryPostByAuthorName = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new AppError("operation failed!", 403));
    }

    const data = await Post.aggregate([
        {
            $match: {
                author_name: {
                    "$regex": id, $options: "i"
                }
            }
        }
    ]);

    res.status(201).json({
        status: "success",
        data
    });

});

exports.queryPostByBody = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new AppError("operation failed!", 403));
    }
    const data = await Post.aggregate([
        {
            $match: {
                body: {
                    "$regex": id, $options: "i"
                }
            }
        }
    ]);

    res.status(201).json({
        status: "success",
        data
    });
});

exports.queryPostByRef = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new AppError("operation failed!", 403));
    }
    const data = await Post.aggregate([
        {
            $match: {
                ref: {
                    "$regex": id, $options: "i"
                }
            }
        }
    ]);

    res.status(201).json({
        status: "success",
        data
    });
});