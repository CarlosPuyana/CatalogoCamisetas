import React from "react";
import { Toast } from "react-bootstrap";

export const ToastModular = ({ toastMsg, toastHeader }) => {
  return (
    <Toast
      style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 9999 }}
    >
      <Toast.Header>{toastHeader}</Toast.Header>
      <Toast.Body>{toastMsg}</Toast.Body>
    </Toast>
  );
};
