import { Carousel, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OptimizeImage } from "../../Images/OptimizeImage";

export const ModalCarruselImagenes = ({ imagenes, show, onHide }: any) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" data-bs-theme="dark">
      <Carousel>
        {imagenes.map((imagen: any, index: any) => (
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
