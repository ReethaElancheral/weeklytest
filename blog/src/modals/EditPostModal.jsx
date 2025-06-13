const EditPostModal = ({ post, onClose }) => {
  return (
    <div>
      <h3>Edit Post: {post.title}</h3>
    
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditPostModal;