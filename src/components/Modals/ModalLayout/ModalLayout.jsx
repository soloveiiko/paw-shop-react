import React from 'react';
import { TfiClose } from 'react-icons/tfi';

const ModalLayout = ({ title, children }) => {
  return (
    <div className="modal-layout">
      <div className="modal-layout_top">
        <h3 className="modal-layout__title">{title}</h3>
        <button onClick={toggleSidebar} className="modal-layout__close-btn">
          <TfiClose />
        </button>
      </div>
      <div className="modal-layout_bottom">{children}</div>
    </div>
  );
};

export default ModalLayout;
