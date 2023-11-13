import { Modal } from "react-bootstrap";

export const ModalUniversal = ({ children, show, onHide }: any) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" data-bs-theme="dark">
      {children}
    </Modal>
  );
};
