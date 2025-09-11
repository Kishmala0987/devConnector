const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const postController = require('../../controllers/postController');

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post('/', auth, postController.createPost);

// @route   GET api/posts
// @desc    Get all posts
// @access  Private
router.get('/', auth, postController.getAllPosts)

// @route   GET api/posts/:id
// @desc    Get post by ID
// @access  Private
router.get('/:id', auth, postController.getPostById);

//@route    DELETE api/posts/:id,
//@desc     Delete a post
//@access  Private
router.delete('/:id', auth, postController.deletePost);

// @route   POST api/posts/like/:id
// @desc    Like and unlike a post
// @access  Private
router.put('/like/:id',auth, postController.likePost);

//@route    PUT api/posts/comment/:id
//@desc     Comment on post
//@access   Private
//@to-do    like comment
router.put('/comment/:id',auth, postController.commentPost);

//@route    DELETE api/post/comment/:id/:comment_id 
//@desc     Delete a comment
//@access   Private
router.delete('/comment/:id/:comment_id',auth, postController.deleteComment);
module.exports = router;