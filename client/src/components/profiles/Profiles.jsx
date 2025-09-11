import { useEffect } from "react";
import PropTypes from "prop-types";
import { getAllProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner";
import ProfileItems from "./ProfileItems";

const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <div className="min-h-screen">
      {loading && !profiles ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <Spinner />
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8  backdrop-blur-lg p-6 rounded-2xl shadow-xl bg-white/10 border border-white/30 ">
          {/* Header Section */}
          <div className="text-center mb-12 ">
            <div className="backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
                <i className="fab fa-connectdevelop text-3xl text-white"></i>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Developers
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover talented developers from around the world. Connect, collaborate, and build amazing things together.
              </p>
              <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  {profiles?.length || 0} Active Profiles
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Ready to Connect
                </div>
              </div>
            </div>
          </div>

          {/* Profiles List */}
          <div className="profiles">
            {profiles && profiles.length > 0 ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Featured Developers</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>
                <div className="space-y-6  mx-auto">
                  {profiles.map((profile) => (
                    <div 
                      key={profile._id} 
                      className="group transform transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg group-hover:shadow-2xl border border-white/60 transition-all duration-300 overflow-hidden max-h-[200px]">
                        <ProfileItems profile={profile} />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-12 border border-white/50 max-w-lg mx-auto">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-users text-4xl text-gray-400"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-700 mb-3 px-6">No Profiles Found</h4>
                  <p className="text-gray-500 mb-6">
                    Be the first to create a profile and showcase your skills to the community!
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    <i className="fas fa-plus mr-2"></i>
                    Create Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }
      `}</style>
    </div>
  );
};

Profiles.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);