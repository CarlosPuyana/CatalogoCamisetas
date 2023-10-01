import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { ICamisetaDetalleProps } from "../../interfaces/ICamiseta";
import { OptimizeImage } from "../../components/ui/OptimizeImage.tsx";
import { ModalCarruselImagenes } from "../../components/ui/Modals.tsx";
import { ToastModular } from "../../components/ui/Toasts.tsx";
import "../../assets/css/camisetaDetalle.css";

const CamisetaDetalle: React.FC<ICamisetaDetalleProps> = ({ camisetas }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const camiseta = camisetas.find((c) => c.id === Number(id));
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);

  if (!camiseta) {
    return (
      <ToastModular
        toastHeader={"Error"}
        toastMsg={"Sucedió algo inesperado!"}
        toastType="toast-error"
      />
    );
  }

  camiseta.imagen.replace("\n", "");
  const imagenesSeparadas = camiseta.imagen.split(" | ");

  const abrirModal = () => {
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex">
      <div className="d-flex flex-column align-items-end w-80">
        <Container className="mt-5" style={{ width: "80%" }}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-3">
                <OptimizeImage
                  src={camiseta.imagen}
                  alt={camiseta.nombre}
                  clasNameImg="img-fluid  camiseta-image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title camiseta-title">
                    {camiseta.nombre.toLocaleUpperCase()}
                  </h5>
                  <div className="tallas-selector">
                    <button className="btn-talla">S</button>
                    <button className="btn-talla">M</button>
                    <button className="btn-talla">L</button>
                    <button className="btn-talla">XL</button>
                    <button className="btn-talla">XXL</button>
                  </div>
                  <div className="version-type">
                    {/** SELECTOR DE TIPO DE VERSIÓN DE LA CAMISETA */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="additional-photos">
            {imagenesSeparadas.map((imagen, index) => (
              <OptimizeImage
                src={imagen}
                alt={`Imagen ${index}`}
                onClick={abrirModal}
                clasNameImg="camiseta-image"
              />
            ))}
          </div>
          <button onClick={() => navigate(-1)} className="boton">
            Volver
          </button>
          <ModalCarruselImagenes
            imagenes={imagenesSeparadas}
            show={showModal}
            onHide={cerrarModal}
          />
        </Container>
      </div>
    </div>
  );
};

export default CamisetaDetalle;
