import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "moment";
import { deleteExperience } from "../../actions/profile";
const Experience = ({ experience, deleteExperience }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
        <h2 className="text-white font-semibold text-lg">Experience Credentials</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{padding:"18px 24px"}}>Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{padding:"18px 24px"}}>Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{padding:"18px 24px"}}>Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{padding:"18px 24px"}}>Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {experience.map((exp) => (
              <tr key={exp._id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {exp.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {exp.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Moment(exp.from).format("MMM YYYY")} - {" "}
                  {exp.to === null ? (
                    <span className="text-green-600 font-medium">Present</span>
                  ) : (
                    Moment(exp.to).format("MMM YYYY")
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => {
                      if(window.confirm('Are you sure you want to delete this experience?')) {
                        deleteExperience(exp._id)
                      }
                    }}
                    className="text-red-500 hover:text-red-600 transition-colors duration-200"
                  >
                    <i className="fas fa-trash mr-1"></i>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null,{deleteExperience})(Experience);
