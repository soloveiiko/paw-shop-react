import React from 'react';
import { TfiClose } from 'react-icons/tfi';

const ModalLayout = ({ title, children, handleAuth }) => {
  return (
    <div className="modal-layout">
      <div className="modal-layout_top">
        <h3 className="modal-layout__title">{title}</h3>
        <button className="modal-layout__close-btn" onClick={handleAuth}>
          <TfiClose />
        </button>
      </div>
      <div className="modal-layout_bottom">{children}</div>
    </div>
  );
};

export default ModalLayout;
