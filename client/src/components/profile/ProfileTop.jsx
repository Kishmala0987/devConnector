const ProfileTop = ({ profile }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-white/5 rounded-full"></div>
      
      {/* Content */}
      <div className="relative bg-white/90 backdrop-blur-sm  shadow-xl border border-white/60 p-8 md:p-12">
        <div className="text-center">
          {/* Avatar */}
          <div className="relative inline-block mb-6">
            <img 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-8 ring-white shadow-2xl" 
              src={profile.user.avatar} 
              alt={profile.user.username} 
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-400 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <i className="fas fa-check text-white text-sm"></i>
            </div>
          </div>
          
          {/* User Info */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            {profile.user.username}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-2">
            {profile.status}
            {profile.company && (
              <span className="text-gray-600 font-normal"> at {profile.company}</span>
            )}
          </p>
          
          {profile.location && (
            <p className="text-gray-600 flex items-center justify-center text-lg mb-8">
              <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
              {profile.location}
            </p>
          )}

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-4 flex-wrap gap-y-4">
            {profile.website && (
              <a 
                href={profile.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <i className="fas fa-globe text-white text-lg group-hover:scale-110 transition-transform"></i>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Website
                </div>
              </a>
            )}
            
            {profile.social && profile.social.twitter && (
              <a
                href={
                  profile.social.twitter.startsWith("http")
                    ? profile.social.twitter
                    : `https://${profile.social.twitter.replace(/^@/, "")}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <i className="fab fa-twitter text-white text-lg group-hover:scale-110 transition-transform"></i>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Twitter
                </div>
              </a>
            )}
            
            {profile.social && profile.social.facebook && (
              <a
                href={
                  profile.social.facebook.startsWith("http")
                    ? profile.social.facebook
                    : `https://${profile.social.facebook}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <i className="fab fa-facebook text-white text-lg group-hover:scale-110 transition-transform"></i>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Facebook
                </div>
              </a>
            )}
            
            {profile.social && profile.social.linkedin && (
              <a
                href={
                  profile.social.linkedin.startsWith("http")
                    ? profile.social.linkedin
                    : `https://${profile.social.linkedin}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <i className="fab fa-linkedin text-white text-lg group-hover:scale-110 transition-transform"></i>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </div>
              </a>
            )}
            
            {profile.social && profile.social.youtube && (
              <a
                href={
                  profile.social.youtube.startsWith("http")
                    ? profile.social.youtube
                    : `https://${profile.social.youtube}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <i className="fab fa-youtube text-white text-lg group-hover:scale-110 transition-transform"></i>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  YouTube
                </div>
              </a>
            )}
            
            {profile.social && profile.social.instagram && (
              <a
                href={
                  profile.social.instagram.startsWith("http")
                    ? profile.social.instagram
                    : `https://${profile.social.instagram}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <i className="fab fa-instagram text-white text-lg group-hover:scale-110 transition-transform"></i>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Instagram
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;