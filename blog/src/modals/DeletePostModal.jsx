const DeletePostModal = ({ post, onClose }) => {
  return (
    <div>
      <p>Are you sure you want to delete "{post.title}"?</p>
      <button onClick={() => { alert('Deleted!'); onClose(); }}>Yes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default DeletePostModal;