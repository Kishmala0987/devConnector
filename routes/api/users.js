const express = require('express');
const router = express.Router();
const controller = require('../../controllers/userController');
// @route   Post api/users
// @desc    Register User
// @access  Public
router.post('/', controller.registerUser);
module.exports = router;