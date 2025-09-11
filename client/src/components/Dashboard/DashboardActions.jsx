import React from 'react';
import {Link} from 'react-router-dom';

function DashboardActions() {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <Link 
        to="/edit-profile" 
        className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200 shadow-sm"
                style={{padding: "30px 20px", textDecoration: 'none'}}

      >
        <i className="fas fa-user-circle text-indigo-500 mr-2"></i> 
        Edit Profile
      </Link>
      <Link 
        to="/add-experience" 
        className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200 shadow-sm"
                style={{padding: "30px 20px", textDecoration: 'none'}}

      >
        <i className="fab fa-black-tie text-indigo-500 mr-2"></i> 
        Add Experience
      </Link>
      <Link 
        to="/add-education" 
        className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200 shadow-sm"
        style={{padding: "30px 20px", textDecoration: 'none'}}
      >
        <i className="fas fa-graduation-cap text-indigo-500 mr-2"></i> 
        Add Education
      </Link>
    </div>
  );
}

export default DashboardActions;
