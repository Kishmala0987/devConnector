import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-9xl font-bold rounded-2xl p-8 mb-8 inline-block">
          404
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          <i className="fas fa-exclamation-triangle text-yellow-500 mr-3"></i>
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          style={{textDecoration: 'none', padding:'30px'}}
        >
          <i className="fas fa-home mr-2"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;