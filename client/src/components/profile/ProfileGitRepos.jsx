import { useEffect } from "react";
import { getGitHubRepos } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const ProfileGitRepos = ({ username, getGitHubRepos, repos }) => {
  useEffect(() => {
    getGitHubRepos(username);
  }, [getGitHubRepos, username]);

  return (
    repos.length > 0 && (
      <div className="p-8">
        {/* Section Header */}
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mr-4">
            <i className="fab fa-github text-white text-lg"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">GitHub Repositories</h2>
            <p className="text-gray-500 text-sm">Latest repositories from @{username}</p>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <div 
              key={repo.id}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden"
            >
              {/* Repo Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Repository {index + 1}
                    </span>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <i className="fas fa-external-link-alt text-sm"></i>
                  </a>
                </div>
                
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-blue-600 transition-colors"
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {repo.name}
                  </h4>
                </a>

                {repo.description && (
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                )}

                {repo.language && (
                  <div className="mt-3">
                    <span className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    style={{padding:'10px'}}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></div>
                      {repo.language}
                    </span>
                  </div>
                )}
              </div>

              {/* Repo Stats */}
              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1.5 text-sm text-gray-600">
                      <i className="fas fa-star text-yellow-500"></i>
                      <span className="font-medium">{repo.stargazers_count}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1.5 text-sm text-gray-600">
                      <i className="fas fa-eye text-blue-500"></i>
                      <span className="font-medium">{repo.watchers}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1.5 text-sm text-gray-600">
                      <i className="fas fa-code-branch text-green-500"></i>
                      <span className="font-medium">{repo.forks}</span>
                    </div>
                  </div>

                  {repo.updated_at && (
                    <div className="text-xs text-gray-500">
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </div>
                  )}
                </div>

                {/* Additional repo info if available */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="text-center mt-8">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-xl hover:from-gray-900 hover:to-black transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{textDecoration: 'none', padding: "30px 20px"}}
          >
            <i className="fab fa-github mr-2"></i>
            View All Repositories on GitHub
            <i className="fas fa-external-link-alt ml-2 text-sm"></i>
          </a>
        </div>
      </div>
    )
  );
};

ProfileGitRepos.propTypes = {
  getGitHubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGitHubRepos })(ProfileGitRepos);