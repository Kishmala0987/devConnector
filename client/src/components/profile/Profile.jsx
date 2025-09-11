import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import { useParams, Link } from "react-router-dom";
import ProfileGitRepos from "./ProfileGitRepos";
import { getUserProfileById } from "../../actions/profile";

const Profile = ({
  getUserProfileById,
  profile: { profile, loading },
  auth,
}) => {
  const { user_id } = useParams();
  useEffect(() => {
    if (user_id) {
      getUserProfileById(user_id);
    }
  }, [getUserProfileById, user_id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-yellow-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {profile === null || loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <Spinner />
            </div>
          </div>
        ) : (
          <>
            {/* Navigation Header */}
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/profiles" 
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-medium rounded-xl shadow-lg hover:shadow-xl border border-white/60 hover:bg-white/90 transition-all duration-200"
                style={{textDecoration: 'none', padding: "30px 20px"}}
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back To Profiles
              </Link>
              {auth.isAuthenticated && profile &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                  <Link 
                    to="/edit-profile" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    style={{textDecoration: 'none', padding: '20px'}}
                  >
                    <i className="fas fa-edit mr-2"></i>
                    Edit Profile
                  </Link>
                )}
            </div>

            {/* Profile Grid */}
            <div className="space-y-8">
              {/* Profile Top Section */}
              <ProfileTop profile={profile} />
              
              {/* Profile About Section */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 overflow-hidden">
                <ProfileAbout profile={profile} />
              </div>

              {/* Two Column Layout for Experience and Education */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Experience Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-briefcase text-white text-sm"></i>
                      </div>
                      Experience
                    </h2>
                  </div>
                  <div className="p-6">
                    {profile.experience.length > 0 ? (
                      <div className="space-y-4">
                        {profile.experience.map((exp) => (
                          <ProfileExperience key={exp._id} experience={exp} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-briefcase text-2xl text-gray-400"></i>
                        </div>
                        <h4 className="text-lg font-medium text-gray-600">No Experience Listed</h4>
                        <p className="text-gray-500 text-sm mt-1">Professional experience will appear here</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Education Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-graduation-cap text-white text-sm"></i>
                      </div>
                      Education
                    </h2>
                  </div>
                  <div className="p-6">
                    {profile.education.length > 0 ? (
                      <div className="space-y-4">
                        {profile.education.map((edu) => (
                          <ProfileEducation key={edu._id} education={edu} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-graduation-cap text-2xl text-gray-400"></i>
                        </div>
                        <h4 className="text-lg font-medium text-gray-600">No Education Listed</h4>
                        <p className="text-gray-500 text-sm mt-1">Educational background will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* GitHub Repositories */}
              {profile.githubusername && (
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 overflow-hidden">
                  <ProfileGitRepos username={profile.githubusername} />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getUserProfileById })(Profile);