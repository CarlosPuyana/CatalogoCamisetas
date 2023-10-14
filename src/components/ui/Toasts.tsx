import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "../../assets/css/toast.css";
export const ToastModular = ({
  toastMsg,
  toastHeader,
  toastType = "toast-normal",
}: any) => {
  const [show, setShow] = useState(true);

  const cerrarToast = () => {
    setShow(false);
  };

  return (
    <Toast
      onClose={cerrarToast}
      show={show}
      delay={4000}
      autohide
      className={`toast-general ${toastType}`}
    >
      <Toast.Header closeButton>
        <strong className="me-auto">{toastHeader}</strong>
      </Toast.Header>
      <Toast.Body>{toastMsg}</Toast.Body>
    </Toast>
  );
};
