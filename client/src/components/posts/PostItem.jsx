import Moment from "moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link } from 'react-router-dom';
import { updateLikes, deletePost } from "../../actions/post";
const PostItem = ({ post, auth, updateLikes, deletePost, showActions }) => {
  const  { isAuthenticated, loading, user } = auth;
  return (
    <>
    {post && (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-6 transform hover:scale-[1.01] transition-all duration-200">
        {/* Post Header with Gradient */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to={`/profile/${post.user}`}>
                <img
                  className="h-12 w-12 rounded-full object-cover border-2 border-white/20"
                  src={post.avatar}
                  alt=""
                />
              </Link>
              <div className="ml-4">
                <Link 
                  to={`/profile/${post.user}`} 
                  className="font-semibold text-white hover:text-white/90 transition-colors duration-200"
                >
                  {post.name}
                </Link>
                <p className="text-sm text-white/70">
                  {Moment(post.date).format("MMM D, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="p-6">
          <p className="text-gray-800 text-lg leading-relaxed mb-4">{post.text}</p>

          {/* Actions */}
          <div className="flex items-center space-x-6 mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => updateLikes(post._id)}
              className={`flex items-center space-x-2 hover:text-indigo-600 transition-colors duration-200 ${
                auth.user && post.likes.some(like => like.user === auth.user._id)
                  ? 'text-indigo-600'
                  : 'text-gray-600'
              }`}
            >
              <i className="fas fa-thumbs-up"></i>
              {post.likes.length > 0 && (
                <span className="text-sm font-medium">{post.likes.length}</span>
              )}
            </button>

            {showActions && (
              <>
                <Link
                  to={`/post/${post._id}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  <i className="fas fa-comment-alt"></i>
                  {post.comments.length > 0 && (
                    <span className="text-sm font-medium">{post.comments.length}</span>
                  )}
                </Link>

                {!loading && isAuthenticated && user && user._id === post.user && (
                  <button
                    onClick={() =>
                      window.confirm("Are you sure you want to delete this post?") &&
                      deletePost(post._id)
                    }
                    className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors duration-200 ml-auto"
                  >
                    <i className="fas fa-trash"></i>
                    <span className="text-sm font-medium">Delete</span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200"
        style={{padding: "30px 20px"}}>
          <div className="flex items-center text-sm text-gray-500">
            <i className="fas fa-globe-americas mr-2"></i>
            <span>Public post</span>
          </div>
        </div>
      </div>
              )}

    </>
  );
};
PostItem.defaultProps = {
  showActions : true
}
PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  updateLikes: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {updateLikes, deletePost})(PostItem);
