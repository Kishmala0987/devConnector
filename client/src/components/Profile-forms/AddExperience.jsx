import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { addExperience } from "../../actions/profile";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const AddExperience = ({ addExperience }) => {
  const navigate = useNavigate();
  const [currentValue, setCurrent] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    current: false,
    to: "",
    description: "",
  });
  const { title, company, location, from, current, to, description } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, navigate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-5">
      <div className="max-w-4xl mx-auto" style={{padding: "30px 20px"}}>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Add An Experience</h1>
            <p className="text-xl text-gray-600 mb-2">
              <i className="fas fa-code-branch mr-2"></i> Add any developer/programming positions that you have had in the past
            </p>
            <small className="text-red-500 font-medium">* = required field</small>
          </div>

          <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
            {/* Job Title */}
            <div className="form-group">
              <input
                type="text"
                placeholder="* Job Title"
                name="title"
                value={title}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>

            {/* Company */}
            <div className="form-group">
              <input
                type="text"
                placeholder="* Company"
                name="company"
                value={company}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>

            {/* Location */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={location}
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

            {/* Current Job Checkbox */}
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
                  Current Job
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

            {/* Job Description */}
            <div className="form-group">
              <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Job Description"
                value={description}
                onChange={(e) => handleChange(e)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 resize-y"
              ></textarea>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <input
                type="submit"
                value="Add Experience"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                style={{padding: "30px 20px"}}
              />
              <Link
                to="/dashboard"
                className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 text-center"
                style={{padding: "30px 20px", textDecoration:'none'}}
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);