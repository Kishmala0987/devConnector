const Post = require("../models/Post");
const User = require("../models/User");

const { check, validationResult } = require("express-validator");

exports.createPost = [
  check("text", "Text is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newPost = new Post({
        user: req.user.id,
        text: req.body.text,
        name: user.username,
        avatar: user.avatar,
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server Error" });
    }
  },
];

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server Error" });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    return res.status(500).json({ msg: "Server Error" });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await post.deleteOne({ _id: req.params.id });
    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    return res.status(500).json({ msg: "Server Error" });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      //post unliked
      post.likes = post.likes.filter(
        (like) => like.user.toString() !== req.user.id
      );
      await post.save();
      return res.json(post.likes);
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    return res.status(500).json({ msg: "Server Error" });
  }
};

exports.commentPost = [
  check("text", "Text is required"),
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params.id);
      const newComment = {
        text: req.body.text,
        user: req.user.id,
        name: user.username,
        avatar: user.avatar,
      };
      post.comments.unshift(newComment);
      await post.save();
      res.json(post.comments)
    } catch (err) {
      console.error(err.message);
      if (err.kind === "ObjectId") {
        return res.status(404).json({ msg: "Post not found" });
      }
      return res.status(500).json({ msg: "Server Error" });
    }
  },
];

exports.deleteComment = async(req,res) => {
  try{
    const post = await Post.findById(req.params.id);
    const comment = post.comments.find(comment => comment._id.toString() ===req.params.comment_id);
    if(!comment){
      return res.status(404).json({msg: "Comment not found"});
    }
    if(comment.user.toString()!==req.user.id){
      return res.status(401).json({msg: 'User not Authorized'});
    }
    post.comments = post.comments.filter(comment=> comment._id.toString() !== req.params.comment_id);
    await post.save()
    res.json(post.comments);
  }
  catch(err){
    console.error(err.messsage);
    if(err.kind === "ObjectId"){
      return res.status(404).json({ msg: "Post not found" });
    }
    return res.status(500).json({ msg: "Server Error" });
  }
}