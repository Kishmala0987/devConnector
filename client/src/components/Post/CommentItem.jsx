import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/post";
import Moment from "moment";
import { Link } from "react-router-dom";
const CommentItem = ({ comment, deleteComment, postId, auth }) => {
  const { user, isAuthenticated } = auth;

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this comment?')) {
      deleteComment(postId, comment._id);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-indigo-100 transition-all duration-200 shadow-sm">
      <div className="flex items-start space-x-4">
        <Link to={`/profile/${comment.user}`} className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full object-cover border-2 border-gray-100"
            src={comment.avatar || "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"}
            alt=""
          />
        </Link>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <Link 
              to={`/profile/${comment.user}`}
              className="font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-200"
            >
              {comment.name}
            </Link>
            <span className="text-sm text-gray-500">
              {Moment(comment.date).fromNow()}
            </span>
          </div>
          
          <p className="mt-2 text-gray-800">{comment.text}</p>
          
          {isAuthenticated && user && user._id === comment.user && (
            <button
              onClick={handleDelete}
              className="mt-4 text-red-500 hover:text-red-600 transition-colors duration-200 text-sm flex items-center"
            >
              <i className="fas fa-trash mr-1"></i>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Fix the PropType for postId
CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired // Changed from number to string
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteComment })(CommentItem);
