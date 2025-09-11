import React, { useState } from 'react';
import { addComment } from '../../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PostComment = ({ addComment, postId }) => {
  const [text, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await addComment(postId, { text });
    setComment('');
    setIsLoading(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
      <form className="flex items-center gap-3 p-3" onSubmit={handleSubmit}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
          <i className="fas fa-user text-white text-sm"></i>
        </div>
        
        <div className="flex-grow relative">
          <textarea
            name="text"
            rows="1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none"
          ></textarea>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors duration-200 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <i className="fas fa-circle-notch fa-spin"></i>
            ) : (
              'Post'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

PostComment.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(PostComment);