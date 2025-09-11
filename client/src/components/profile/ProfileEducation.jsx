import Moment from "moment";

const ProfileEducation = ({ education }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-purple-300 transition-all duration-200 shadow-sm hover:shadow-md">
      {/* School and Duration */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{education.school}</h3>
        <span className="text-sm text-gray-500">
          {Moment(education.from).format("MMM YYYY")} -{" "}
          {education.to === null ? (
            <span className="text-green-600 font-medium">Present</span>
          ) : (
            Moment(education.to).format("MMM YYYY")
          )}
        </span>
      </div>

      {/* Degree and Field of Study */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">{education.degree}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-gray-600">{education.fieldofstudy}</span>
        </div>
      </div>

      {/* Description */}
      {education.description && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-gray-600 text-sm leading-relaxed">
            {education.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileEducation;