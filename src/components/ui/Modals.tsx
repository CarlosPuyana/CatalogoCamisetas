import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OptimizeImage } from "./OptimizeImage.tsx";

export const ModalCarruselImagenes = ({
  imagenes,
  initialIndex = 0,
  show,
  onHide,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const imagenAnterior = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  const siguienteImagen = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Body>
        <Row className="justify-content-center">
          <Col>
            <div className="text-center" style={{ height: "100%" }}>
              <Button
                variant="secondary"
                onClick={imagenAnterior}
                style={{
                  height: "100%",
                  fontSize: "24px",
                }}
              >
                {"<"}
              </Button>
            </div>
          </Col>
          <Col xs={8}>
            <Link
              to={imagenes[currentIndex]}
              target="_blank"
              style={{ cursor: "zoom-in", textDecoration: "none" }}
            >
              <OptimizeImage
                src={imagenes[currentIndex]}
                alt={`${currentIndex + 1}`}
                clasNameImg="img-fluid"
              />
            </Link>
          </Col>
          <Col>
            <div className="text-center" style={{ height: "100%" }}>
              <Button
                variant="secondary"
                onClick={siguienteImagen}
                style={{
                  height: "100%",
                  fontSize: "24px",
                }}
              >
                {">"}
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="danger"
          onClick={onHide}
          style={{
            width: "50%",
            fontSize: "14px",
          }}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
