const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); //.get -> to get any value from the config file

const connectDB = async () => {
  try{
    await mongoose.connect(db);
    console.log('MongoDB Connected...');
  }
  catch(err){
    console.error(err.message);
    process.exit(1); // Exit process with failure, 1 indicates failure
  }
}
module.exports = connectDB;