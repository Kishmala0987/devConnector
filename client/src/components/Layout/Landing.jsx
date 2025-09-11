import { useState } from 'react';
import {Link} from 'react-router-dom';
const Landing = () => {
  const [isAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <div className="p-8 text-center">Redirecting to dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-ping opacity-25"></div>
        <div className="absolute bottom-40 right-40 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-20"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Glowing orbs */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
        
        {/* Code-like background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-green-400 font-mono text-xs animate-pulse">
            const developer = &#123; skills: ['React', 'Node.js', 'Python'] &#125;;
          </div>
          <div className="absolute top-32 right-16 text-blue-400 font-mono text-xs animate-pulse delay-1000">
            function connect() &#123; return 'community'; &#125;
          </div>
          <div className="absolute bottom-24 left-32 text-purple-400 font-mono text-xs animate-pulse delay-2000">
            &lt;Developer /&gt;
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-16 text-center z-10">
        {/* Main heading with enhanced animation */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Developer Connector
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full animate-expand"></div>
        </div>

        {/* Subtitle with enhanced styling */}
        <p className="text-xl md:text-2xl text-indigo-800 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          Create a developer profile/portfolio, share posts and get help from
          <span className="text-cyan-400 font-semibold"> other developers</span>
        </p>

        {/* Enhanced buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link to='/register'
            className="group px-8 py-4 text-lg font-semibold text-white  bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto relative overflow-hidden animate-fade-in-up delay-500"
            style={{padding:"12px 32px", textDecoration:"none"}}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link to='/login'
            className="group px-8 py-4 text-lg font-semibold text-white border-2 border-purple-400 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500  rounded-xl hover:bg-purple-500/20 hover:shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto backdrop-blur-sm animate-fade-in-up delay-700"
            style={{padding:"12px 32px", textDecoration:"none"}}
          >
            <span className="relative z-10">Sign In</span>
          </Link>
        </div>
{/* Enhanced feature cards - Updated for white background */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
  {/* Developer Community Card */}
  <div className="group bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl p-6 shadow-xl border border-cyan-300 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-900 hover:shadow-2xl">
    <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
      Developer Community
    </h3>
    <p className="text-gray-600 group-hover:text-cyan-600 transition-colors duration-300">
      Connect with developers from around the world
    </p>
  </div>

  {/* Share Knowledge Card */}
  <div className="group bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 shadow-xl border border-purple-300 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-1100 hover:shadow-2xl">
    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
      Share Knowledge
    </h3>
    <p className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300">
      Share your experience and learn from others
    </p>
  </div>

  {/* Showcase Projects Card */}
  <div className="group bg-gradient-to-br from-pink-50 to-red-100 rounded-xl p-6 shadow-xl border border-pink-300 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-1300 hover:shadow-2xl">
    <div className="w-14 h-14 bg-gradient-to-r from-pink-600 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-700 transition-colors duration-300">
      Showcase Projects
    </h3>
    <p className="text-gray-600 group-hover:text-pink-600 transition-colors duration-300">
      Display your portfolio and get noticed
    </p>
  </div>
</div>

        {/* Stats section */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center animate-fade-in-up delay-1500">
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">10K+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Developers</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">50K+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Projects</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-pink-400 group-hover:scale-110 transition-transform duration-300">100K+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Connections</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(-20px) rotate(240deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(-120deg); }
          66% { transform: translateY(-40px) rotate(-240deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }

        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-expand { animation: expand 1s ease-out 0.8s forwards; width: 0; }

        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1300 { animation-delay: 1.3s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }

        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default Landing;
