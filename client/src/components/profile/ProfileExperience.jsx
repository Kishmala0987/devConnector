import Moment from "moment";

const ProfileExperience = ({ experience }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md">
      {/* Company and Duration */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{experience.company}</h3>
        <span className="text-sm text-gray-500">
          {Moment(experience.from).format("MMM YYYY")} -{" "}
          {experience.to === null ? (
            <span className="text-green-600 font-medium">Present</span>
          ) : (
            Moment(experience.to).format("MMM YYYY")
          )}
        </span>
      </div>

      {/* Position */}
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-gray-700 font-medium">{experience.title}</span>
      </div>

      {/* Description */}
      {experience.description && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
      )}

      {/* Location if available */}
      {experience.location && (
        <div className="mt-4 flex items-center text-gray-500 text-sm">
          <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
          {experience.location}
        </div>
      )}
    </div>
  );
};

export default ProfileExperience;