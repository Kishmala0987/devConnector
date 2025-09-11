import { Link } from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../actions/auth";
const Navbar = ({ logout, auth: {isAuthenticated, loading} }) => {
  const authLinks = (
    <ul className="flex items-center space-x-6">
      <li>
        <Link 
          to="/profiles" 
          className="relative text-gray-200 hover:text-white transition-all duration-300 group"
          style={{textDecoration: 'none'}}
        >
          <span>Developers</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
      <li>
        <Link 
          to="/posts" 
          className="relative text-gray-200 hover:text-white transition-all duration-300 group"
          style={{textDecoration: 'none'}}
        >
          <span>Posts</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
      <li>
        <Link 
          to='/dashboard' 
          className="relative text-gray-200 hover:text-white transition-all duration-300 group flex items-center"
          style={{textDecoration: 'none'}}
        >
          <i className="fas fa-user mr-2 transform group-hover:scale-110 transition-transform duration-300"></i>
          <span className="hidden sm:inline">Dashboard</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
      <li>
        <button
          onClick={logout}
          className="relative text-gray-200 hover:text-white transition-all duration-300 group flex items-center"
        >
          <i className="fas fa-sign-out-alt mr-2 transform group-hover:scale-110 transition-transform duration-300"></i>
          <span className="hidden sm:inline">Logout</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="flex items-center space-x-6">
      <li>
        <Link 
          to="/profiles" 
          className="relative text-gray-200 hover:text-white transition-all duration-300 group"
          style={{textDecoration: 'none'}}
        >
          <span>Developers</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
      <li>
        <Link 
          to="/register" 
          className="px-6 py-2 text-gray-200 border border-gray-200 rounded-lg hover:text-white hover:border-white transition-all duration-300"
          
          style={{textDecoration: 'none', padding:'30px'}}
        >
          Register
        </Link>
      </li>
      <li>
        <Link 
          to="/login" 
          className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg transform hover:scale-105 hover:shadow-lg transition-all duration-300"
          style={{textDecoration: 'none', padding:'30px'}}
        >
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-white group"
            style={{textDecoration: 'none'}}
          >
            <i className="fas fa-code text-2xl text-indigo-500 transform group-hover:scale-110 transition-transform duration-300"></i>
            <span className="font-bold text-xl group-hover:text-indigo-400 transition-colors duration-300">
              DevConnector
            </span>
          </Link>

          {!loading && (
            <div className="flex items-center">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
  auth: state.auth
});
export default connect(mapStateToProps,{logout})(Navbar);
