import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "moment";
import { deleteEducation } from "../../actions/profile";
const Education = ({ education, deleteEducation }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-8">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
        <h2 className="text-white font-semibold text-lg">Education Credentials</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{padding:"18px 24px"}}>School</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{padding:"18px 24px"}}>Degree</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{padding:"18px 24px"}}>Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{padding:"18px 24px"}}>Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {education.map((edu) => (
              <tr key={edu._id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {edu.school}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {edu.degree}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Moment(edu.from).format("MMM YYYY")} - {" "}
                  {edu.to === null ? (
                    <span className="text-green-600 font-medium">Present</span>
                  ) : (
                    Moment(edu.to).format("MMM YYYY")
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => {
                      if(window.confirm('Are you sure you want to delete this education?')) {
                        deleteEducation(edu._id)
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

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, {deleteEducation})(Education);
