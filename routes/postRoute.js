const express = require("express");
const {
    createPost, getAllPosts, deletePost, getPost, searchPost, updatePost,
    queryPostByAuthorName, queryPostByProjectTopic, queryPostByBody, queryPostByRef
} = require("../controllers/postController");
const router = express.Router();

router.route("/")
    .get(getAllPosts).post(createPost);

router.route("/:id")
    .delete(deletePost)
    .get(getPost)
    .patch(updatePost);

router.route("/search/:id").get(searchPost);
router.get("/search/name/:id", queryPostByAuthorName);
router.get("/search/topic/:id", queryPostByProjectTopic);
router.get("/search/body/:id", queryPostByBody);
router.get("/search/ref/:id", queryPostByRef);

module.exports = router;