const ProfileAbout = ({profile}) => {
  return (
    <div className="p-8">
      {/* Bio Section */}
      {profile.bio && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <i className="fas fa-user text-white text-sm"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {profile.user && profile.user.username 
                ? `${profile.user.username.split(' ')[0]}'s Bio` 
                : 'About'
              }
            </h2>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed text-lg">{profile.bio}</p>
          </div>
        </div>
      )}

      {/* Divider */}
      {profile.bio && (
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="px-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      )}

      {/* Skills Section */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
            <i className="fas fa-code text-white text-sm"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Skill Set</h2>
        </div>

        {profile.skills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {profile.skills.map((skill, index) => (
              <div 
                key={index}
                className="group flex items-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-code text-2xl text-gray-400"></i>
            </div>
            <h4 className="text-lg font-medium text-gray-600 mb-2">No Skills Listed</h4>
            <p className="text-gray-500 text-sm">Technical skills and expertise will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAbout;