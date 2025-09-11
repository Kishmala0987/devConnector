import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createOrUpdateProfile,
  getCurrentProfile,
} from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../Layout/Spinner";

const EditProfile = ({
  profile: { profile, loading },
  createOrUpdateProfile,
  getCurrentProfile,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    githubusername: "",
    youtube: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });
  const [displaySocialLinks, toggleSocialLinks] = useState(false);
  
  useEffect(() => {
    getCurrentProfile();

    if (!loading && profile) {
      setFormData({
        company: profile.company || '',
        website: profile.website || '',
        location: profile.location || '',
        status: profile.status || '',
        skills: Array.isArray(profile.skills) ? profile.skills.join(',') : '',
        bio: profile.bio || '',
        githubusername: profile.githubusername || '',
        youtube: profile.social?.youtube || '',
        twitter: profile.social?.twitter || '',
        facebook: profile.social?.facebook || '',
        linkedin: profile.social?.linkedin || '',
        instagram: profile.social?.instagram || ''
      });
    }
  }, [loading, getCurrentProfile, profile]);
  
  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formData;
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createOrUpdateProfile(formData, navigate, true);
  };
  
  return (
    loading ? <Spinner /> : (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto" style={{padding: "30px 20px"}}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-gray-800 mb-3">Edit Your Profile</h1>
              <p className="text-xl text-gray-600 mb-2">
                <i className="fas fa-user mr-2"></i> Let's get some information to make your profile stand out
              </p>
              <small className="text-red-500 font-medium">* = required field</small>
            </div>

            <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
              {/* Professional Status */}
              <div className="form-group">
                <select
                  name="status"
                  value={status}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                >
                  <option value="0">* Select Professional Status</option>
                  <option value="Developer">Developer</option>
                  <option value="Junior Developer">Junior Developer</option>
                  <option value="Senior Developer">Senior Developer</option>
                  <option value="Manager">Manager</option>
                  <option value="Student or Learning">Student or Learning</option>
                  <option value="Instructor">Instructor or Teacher</option>
                  <option value="Intern">Intern</option>
                  <option value="Other">Other</option>
                </select>
                <small className="text-gray-500 text-sm mt-1 block">
                  Give us an idea of where you are at in your career
                </small>
              </div>

              {/* Company */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={company}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                />
                <small className="text-gray-500 text-sm mt-1 block">
                  Could be your own company or one you work for
                </small>
              </div>

              {/* Website */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Website"
                  name="website"
                  value={website}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                />
                <small className="text-gray-500 text-sm mt-1 block">
                  Could be your own or a company website
                </small>
              </div>

              {/* Location */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={location}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                />
                <small className="text-gray-500 text-sm mt-1 block">
                  City & state suggested (eg. Boston, MA)
                </small>
              </div>

              {/* Skills */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="* Skills"
                  name="skills"
                  value={skills}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                />
                <small className="text-gray-500 text-sm mt-1 block">
                  Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
                </small>
              </div>

              {/* GitHub Username */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Github Username"
                  name="githubusername"
                  value={githubusername}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                />
                <small className="text-gray-500 text-sm mt-1 block">
                  If you want your latest repos and a Github link, include your username
                </small>
              </div>

              {/* Bio */}
              <div className="form-group">
                <textarea
                  placeholder="A short bio of yourself"
                  name="bio"
                  value={bio}
                  onChange={(e) => handleChange(e)}
                  rows="4"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 resize-y"
                ></textarea>
                <small className="text-gray-500 text-sm mt-1 block">Tell us a little about yourself</small>
              </div>

              {/* Social Links Toggle */}
              <div className="flex items-center space-x-3 my-8">
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-100 hover:bg-purple-500 hover:text-white border-2 border-gray-200 hover:border-purple-500 rounded-lg font-medium text-gray-700 transition-all duration-200"
                  onClick={() => toggleSocialLinks(!displaySocialLinks)}
                  style={{padding: "30px 20px"}}
                >
                  Add Social Network Links
                </button>
                <span className="text-green-500 font-medium text-sm">Optional</span>
              </div>

              {/* Social Links */}
              {displaySocialLinks && (
                <div className="space-y-4 bg-gray-50 p-6 rounded-xl border-2 border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Social Network Links</h3>
                  
                  <div className="flex items-center space-x-3">
                    <i className="fab fa-twitter text-2xl text-purple-500 w-8"></i>
                    <input
                      type="text"
                      placeholder="Twitter URL"
                      name="twitter"
                      value={twitter}
                      onChange={(e) => handleChange(e)}
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg bg-white text-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <i className="fab fa-facebook text-2xl text-purple-500 w-8"></i>
                    <input
                      type="text"
                      placeholder="Facebook URL"
                      name="facebook"
                      value={facebook}
                      onChange={(e) => handleChange(e)}
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg bg-white text-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <i className="fab fa-youtube text-2xl text-purple-500 w-8"></i>
                    <input
                      type="text"
                      placeholder="YouTube URL"
                      name="youtube"
                      value={youtube}
                      onChange={(e) => handleChange(e)}
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg bg-white text-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <i className="fab fa-linkedin text-2xl text-purple-500 w-8"></i>
                    <input
                      type="text"
                      placeholder="Linkedin URL"
                      name="linkedin"
                      value={linkedin}
                      onChange={(e) => handleChange(e)}
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg bg-white text-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <i className="fab fa-instagram text-2xl text-purple-500 w-8"></i>
                    <input
                      type="text"
                      placeholder="Instagram URL"
                      name="instagram"
                      value={instagram}
                      onChange={(e) => handleChange(e)}
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg bg-white text-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                    />
                  </div>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <input
                  type="submit"
                  value="Update Profile"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                  style={{padding: "30px 20px"}}
                />
                <Link
                  className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 text-center"
                  to="/dashboard"
                  style={{padding: "30px 20px", textDecoration: 'none'}}
                >
                  Go Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

EditProfile.propTypes = {
  createOrUpdateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  createOrUpdateProfile,
  getCurrentProfile,
})(EditProfile);