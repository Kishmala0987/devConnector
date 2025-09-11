const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');

// @route   GET api/auth
// @desc    Getting the logged in user
// @access  Public
router.get('/',auth, async(req, res)=>{ 
  try{
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
    console.log(res)
  }
  catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token //login
// @access  Public
router.post('/',[
  check('email', 'Please include a valid email').isEmail(),
  check('password','Password is required').exists()
],
  async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }
    try{
      const {email, password} = req.body;
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({errors: [{msg:' Invalid Credentials'}]});
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch){
        return res.status(400).json({msg: 'Invalid Credentials'});
      }
      const payload = {
        user: {
          id: user.id,
        }
      };
      const secret = config.get('jwtSecret');
      jwt.sign(payload, secret, {expiresIn: '1 day'}, 
        (err, token)=>{
          if(err) throw err;
          res.json({token});
        }
      );
      console.log('User authenticated successfully');
    }
    catch(error){
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
 );

module.exports = router;