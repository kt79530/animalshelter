import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/_modalLayout.scss';

interface ModalLayoutProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  date?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ show, onClose, title, date, children, footer }) => {
  return (
    <Modal show={show} onHide={onClose} centered scrollable dialogClassName="modal-style">
      {title && (
        <Modal.Header>
          <div className="ms-4 mt-3">
            <Modal.Title><h2>{title}</h2></Modal.Title>
            {date && <p className="tab mt-2">{date}</p>}
          </div>
        </Modal.Header>
      )}

      <div className="line"></div>

      <Modal.Body className="post-modal-body px-4 pt-4 pb-0">
        {children}
      </Modal.Body>

      <div className="line mt-4"></div>

      {footer && (
        <Modal.Footer className="post-modal-footer d-flex justify-content-center align-items-center">
          {footer}
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default ModalLayout;
