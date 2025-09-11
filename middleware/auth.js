const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) =>{
  const token = req.header('x-auth-token');
  if(!token){
    return res.status(401).json({msg: 'Acces denied, no token provided'});
  }
  try{
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user; 
    next();
  }
  catch(err){
    res.satus(401).json({msg: 'Token is not valid'});
  }
};

