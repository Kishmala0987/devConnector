import { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import { useNavigate, Link } from "react-router-dom";

const AddEducation = ({ addEducation }) => {
  const navigate = useNavigate();
  const [currentValue, setCurrent] = useState(false);
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
  });
  const { school, degree, fieldofstudy, from, current, to } =
    formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, navigate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto" style={{padding: "30px 20px"}}>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Add Your Education</h1>
            <p className="text-xl text-gray-600 mb-2">
              <i className="fas fa-graduation-cap mr-2"></i> Add any school, bootcamp, etc that you have attended
            </p>
            <small className="text-red-500 font-medium">* = required field</small>
          </div>

          <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
            {/* School or Bootcamp */}
            <div className="form-group">
              <input
                type="text"
                placeholder="* School or Bootcamp"
                name="school"
                value={school}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>

            {/* Degree or Certificate */}
            <div className="form-group">
              <input
                type="text"
                placeholder="* Degree or Certificate"
                name="degree"
                value={degree}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>

            {/* Field of Study */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Field Of Study"
                name="fieldofstudy"
                value={fieldofstudy}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>

            {/* From Date */}
            <div className="form-group">
              <label className="block text-lg font-semibold text-gray-700 mb-2">From Date</label>
              <input
                type="date"
                name="from"
                value={from}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>

            {/* Current School Checkbox */}
            <div className="form-group">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                <input
                  type="checkbox"
                  name="current"
                  checked={current}
                  value={current}
                  onChange={(e) => {
                    setCurrent(!currentValue);
                    setFormData({ ...formData, current: !current });
                  }}
                  className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                />
                <label className="text-gray-700 font-medium">
                  Current School or Bootcamp
                </label>
              </div>
            </div>

            {/* To Date */}
            <div className="form-group">
              <label className="block text-lg font-semibold text-gray-700 mb-2">To Date</label>
              <input
                type="date"
                name="to"
                value={to}
                onChange={(e) => handleChange(e)}
                disabled={currentValue ? 'disabled' : ''}
                className={`w-full p-3 border-2 border-gray-200 rounded-lg text-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 ${
                  currentValue 
                    ? 'bg-gray-200 cursor-not-allowed' 
                    : 'bg-gray-50 focus:bg-white'
                }`}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <input
                type="submit"
                value="Add Education"
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
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);