import React, { useState } from 'react';
import Modal from './Modal';
import EditPostModal from '../../modals/EditPostModal';
import DeletePostModal from '../../modals/DeletePostModal';

const PostDetail = ({ data }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <button onClick={() => setEditOpen(true)}>Edit</button>
      <button onClick={() => setDeleteOpen(true)}>Delete</button>

      {editOpen && (
        <Modal onClose={() => setEditOpen(false)}>
          <EditPostModal post={data} onClose={() => setEditOpen(false)} />
        </Modal>
      )}

      {deleteOpen && (
        <Modal onClose={() => setDeleteOpen(false)}>
          <DeletePostModal post={data} onClose={() => setDeleteOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default PostDetail;
