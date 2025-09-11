const Profile = require("../models/Profile");
const User = require("../models/User");
const Posts = require("../models/Post"); 
const request = require("request");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Post = require("../models/Post");
exports.getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["username", "avatar"]
    );
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.createOrUpdateProfile = [
  check("status", "Status is required").not().isEmpty(),
  check("skills", "Skills are required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram,
    } = req.body;
    const profileFields = {}; // Create an object to hold profile fields
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(",").map((skill) => skill.trim());
    }

    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true } // Return the updated profile
        );
        return res.json(profile);
      }
      //create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
];
exports.getAllProfiles = async(req, res) => {
  try{
    const profiles = await Profile.find().populate("user", ["username", "avatar"]);
    res.json(profiles);
  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getProfileByUserId = async (req, res) => {
  const userId = req.params.user_id;
  try{
    const profile = await Profile.findOne({user: userId}).populate("user", ["username", "avatar"]);
    if(!profile){
      return res.status(400).json({msg: "Profile not found"});
    }
    res.json(profile);
  }
  catch(err){
    console.error(err.message);
    if(err.kind == "ObjectId"){
      return res.status(400).json({msg: "Profile not found"});
    }
    res.status(500).send("Server Error");
  }
};

exports.deleteProfile = async (req, res) => {
  try{
    //Remove user posts
    await Post.deleteMany({user: req.user.id})
    
    //Remove profile
    await Profile.findOneAndDelete({ user: req.user.id});
    //Remove user
    await User.findOneAndDelete({_id: req.user.id});
    res.json({msg: "User and profile deleted"});


  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.addExperience = [
  check("title", "Title is required").not().isEmpty(),
  check("company", "Company is required").not().isEmpty(),
  check("from", "From date is required").not().isEmpty(),
  async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }
    const {title, company, location, from, to, current, description} = req.body;
    const newExp  = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    }
    if (current) newExp.to = null;
    try{
      const profile = await Profile.findOne({ user: req.user.id});
      profile.experience.unshift(newExp);
      await profile.save();
      res.json(profile);

    }
    catch(err){
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
];

exports.deleteExperience = async(req, res) => {
  try{
    const profile = await Profile.findOne({user:req.user.id});
    profile.experience = profile.experience.filter( (exp) => exp._id.toString() !== req.params.exp_id);    
    await profile.save();
    res.json(profile);
  }catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.addEducation = [
  check('school', 'School is required').not().isEmpty(),
  check('degree', 'Degree is required').not().isEmpty(),
  check('fieldofstudy', 'Field of study is required').not().isEmpty(),
  check('from', 'From date is required').not().isEmpty(),
  async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }
    const { school, degree, fieldofstudy, from, to, current } = req.body;
    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
    };
        if (current) newEdu.to = null;

    try{
      const profile = await Profile.findOne({ user: req.user.id});
      profile.education.unshift(newEdu);
      await profile.save();
      res.json(profile);
    }
    catch(err){
      console.error(err.message);
      return res.status(500).json({msg: "Server Error"});
    } 
  }
];

exports.deleteEducation = async(req, res) => {
  try{
    const profile = await Profile.findOne({user: req.user.id});
    profile.education = profile.education.filter( (edu) => edu._id.toString()!== req.params.edu_id);
    await profile.save();
    res.json(profile);
  }
  catch(err){
    console.error(err.message);
      return res.status(500).json({msg: "Server Error"});
  }
}

exports.getGithubRepos = async (req, res) => {
  try{
    const options = {
    uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`, // GitHub API endpoint to get user repos
    method: "GET",
    headers: { "user-agent": "node.js",
      "Authorization": `token ${config.get("githubToken")}`
    } // GitHub API requires a user-agent header
  }
  request(options, (error, response, body) => { //request is a Node.js module to make HTTP requests for external APIs
    if(error) console.error(error);
    if(response.statusCode !==200){
      console.error("GitHub API error:", body); // <-- Add this line

      return res.status(400).json({msg: "No GitHub profile found"});
    } 
    res.json(JSON.parse(body)); //we parse the json response because the body is a string and we need to convert it to a JSON object
  });
}
catch(err){
  console.error(err.message);
      return res.status(500).json({msg: "Server Error"});
}

}