import React, { useState } from 'react'
import {addPost} from '../../actions/post';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const CreatePost = ({addPost}) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoading(true);
    addPost({text});
    setText('');
    // Reset loading state after a short delay
    setTimeout(() => setIsLoading(false), 1000);
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Say Something...</h3>
        </div>
      </div>
      
      {/* Form Content */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Textarea */}
          <div className="relative">
            <textarea
              name="text"
              cols="30"
              rows="5"
              placeholder="What's on your mind? Share your thoughts with the community..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-400 placeholder-gray-500 resize-none text-gray-700"
            />
            
            {/* Character Counter */}
            <div className="absolute bottom-3 right-3 text-sm text-gray-400">
              {text.length} characters
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            {/* Post Options */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Photo
              </button>
              
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m3 6v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m3 0V8a1 1 0 011-1h4a1 1 0 011 1v2m-3 0h2" />
                </svg>
                Poll
              </button>
              
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Feeling
              </button>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !text.trim()}
              className="flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ padding: "12px 24px" }}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Posting...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Share Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      
      {/* Footer Info */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200" 
      style={{ padding: "12px 24px" }}>
        <div className="flex items-center justify-between text-sm text-gray-500 ">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Your post will be visible to all community members
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Safe & Secure
          </div>
        </div>
      </div>
    </div>
  )
}

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, {addPost})(CreatePost);