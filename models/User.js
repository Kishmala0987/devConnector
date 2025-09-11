const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username:{
    type: String,
    required:true,
    unique: true
  },
  email:{
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    required: true
  },
  avatar:{
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  }

});
const User = mongoose.model('User', userSchema);
module.exports = User;