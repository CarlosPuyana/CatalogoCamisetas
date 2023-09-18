import React, { useState } from "react";
import { Button, Carousel, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OptimizeImage } from "./OptimizeImage.tsx";

export const ModalCarruselImagenes= ({ imagenes, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" data-bs-theme="dark">
      <Carousel>
        {imagenes.map((imagen, index) => (
          <Carousel.Item key={index}>
            <Link
              to={imagen}
              target="_blank"
              style={{ cursor: "zoom-in", textDecoration: "none" }}
            >
              <OptimizeImage
                clasNameImg="rounded img-fluid"
                src={imagen}
                alt={`img ${++index}`}
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </Modal>
  );
};

export const ModalCarruselImagenesLogico = ({
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
                clasNameImg="rounded img-fluid"
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
    </Modal>
  );
};
