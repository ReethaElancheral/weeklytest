import React from 'react';
import ReactDOM from 'react-dom';

// export default function Portal({ children }) {
//   const portalRoot = document.getElementById('portal-root');
//   return ReactDOM.createPortal(children, portalRoot);
// }


function ModalPortal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">{children}</div>,
    document.getElementById('modal-root') 
  );
}

export default ModalPortal;