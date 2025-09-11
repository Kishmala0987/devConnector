import {Link} from 'react-router-dom';

const ProfileItems = ({profile}) => {
  return (
    <div className="p-6">
      {/* Profile Header */}
      <Link to={`/profile/${profile.user._id}`} style={{ textDecoration: 'none' }}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <img 
            className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg" 
            src={profile.user.avatar} 
            alt={profile.user.username} 
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{profile.user.username}</h3>
          <p className="text-blue-600 font-medium">
            {profile.status} 
            {profile.company && <span className="text-gray-600"> at {profile.company}</span>}
          </p>
          {profile.location && (
            <p className="text-gray-500 text-sm flex items-center mt-1 ">
              <i className="fas fa-map-marker-alt mr-1 text-red-500"></i>
              {profile.location}
            </p>
          )}
        </div>
          {profile.skills.length > 0 && (
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Top Skills</h4>
          <div className="flex flex-wrap gap-2">
            {profile.skills.slice(0,4).map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
              >
                {skill}
              </span>
            ))}
            {profile.skills.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                +{profile.skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}
      </div>
      </Link>
    </div>
  );
};

ProfileItems.propTypes = {};

export default ProfileItems;