const User = require('../models/User');
const config = require('config');

const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');

exports.registerUser = 
[
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password','Please enter a password with 6 or more charachters').isLength({min:6}),
  async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }
    try{
      const {username, email, password} = req.body;
      let user = await User.findOne({email});
      if(user){
        return res.status(400).json({errors: [{msg:' User already exists'}]});

      }
      const avatar = gravatar.url(email, {
        s: '200',// Size of the avatar 
        r: 'pg', // Rating of the avatar -> 'pg' means "Parental Guidance" 
        d: 'mm' // Default avatar if none is found -> 'mm' means Mystery man
      });
      user = new User({
        username, email, avatar, password
      });
      const salt = await bcrypt.genSalt(10); // Generate a salt for hashing,salt meaning a random string added to the password before hashing
      user.password = await bcrypt.hash(password, salt); // Hash the password with the salt
      
      await user.save();
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
      //jwt.sign means that the user is signed in and a token is generated


      console.log('User registered successfully');
    }
    catch(error){
      console.error(error.message);
      return res.status(500).json({msg: "Server Error"});
    }

  }
];
