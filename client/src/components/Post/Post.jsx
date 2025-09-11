import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPostById } from "../../actions/post";
import Spinner from "../Layout/Spinner";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
const Post = ({ getPostById, post: { post, loading } }) => {
  const { postId } = useParams();
  
  useEffect(() => {
    getPostById(postId);
  }, [getPostById, postId]);

  return loading || !post ? (
    <Spinner />
  ) : (
    <div className="mx-auto px-4 py-6">
       <div className="backdrop-blur-lg p-6 rounded-2xl shadow-xl bg-white/10 border border-white/30">
      <Link 
        to="/posts" 
        className="inline-flex items-center mb-6 text-indigo-600 hover:text-indigo-700 transition-colors"
        style={{textDecoration: 'none'}}
      >
        <i className="fas fa-arrow-left mr-2"></i>
        Back to Posts
      </Link>

      <PostItem post={post} showActions={false} />
      
      

      <div className="mt-8 space-y-6">
        {post.comments.length > 0 ? (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Comments ({post.comments.length})
            </h3>
            {post.comments.map((comment) => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
              />
            ))}
          </>
        ) : (
          <p className="text-center py-8 text-gray-500">No comments yet. Be the first to comment!</p>
        )}
        </div>
        <div className="mt-8">
        <CommentForm postId={post._id} />
      </div>
      </div>
       {/* Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }
      `}</style>
    </div>
  );
};

Post.propTypes = {
  getPostById: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPostById })(Post);
