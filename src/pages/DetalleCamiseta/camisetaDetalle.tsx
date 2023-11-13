import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { ICamisetaDetalleProps } from "../../interfaz/ICamiseta";
import "../../assets/css/camisetaDetalle.css";
import { ToastModular } from "../../components/ui/Toasts";
import { OptimizeImage } from "../../components/ui/OptimizeImage";
import {
  ModalCarruselImagenes,
  ModalUniversal,
} from "../../components/ui/Modals";
import TableGroup from "../../components/ui/tables/TableGroup";
import { WOMEN_SIZE } from "../Tallas/tablesConfig/women-size/women-size.config";
import { PLAYER_VERSION_MEN_SIZE } from "../Tallas/tablesConfig/player-version-men-size/player-version-men-size.config";
import { KIDS_SIZE } from "../Tallas/tablesConfig/kids-size/kids-size.config";
import { FAN_VERSION_MEN_SIZE } from "../Tallas/tablesConfig/fan-version-men-size/fan-version-men-size.config";

// HACER FILTRADO DINAMICO DE ESTAS TABLAS DEPENDIENDO DE LA PRENDA (NINNIO MUJER FAN PLAYER...)
const tablasTallas = [
  WOMEN_SIZE,
  PLAYER_VERSION_MEN_SIZE,
  KIDS_SIZE,
  FAN_VERSION_MEN_SIZE,
];

const CamisetaDetalle: React.FC<ICamisetaDetalleProps> = ({ camisetas }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModalImagenes, setShowModalImagenes] = useState(false);
  const [showModalTallas, setShowModalTallas] = useState(false);
  const camiseta = camisetas.find((c) => c.id === Number(id));

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
                    <button
                      className="btn-talla"
                      id="guiaTallas"
                      onClick={() => setShowModalTallas(true)}
                    >
                      GUÍA DE TALLAS DE LA PRENDA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="additional-photos">
            {imagenesSeparadas.map((imagen, index) => (
              <OptimizeImage
                key={index}
                src={imagen}
                alt={`Imagen ${index}`}
                onClick={() => setShowModalImagenes(true)}
                clasNameImg="camiseta-image"
              />
            ))}
          </div>
          <button onClick={() => navigate(-1)} className="boton">
            Volver
          </button>
          <ModalCarruselImagenes
            imagenes={imagenesSeparadas}
            show={showModalImagenes}
            onHide={() => setShowModalImagenes(false)}
          />
          <ModalUniversal
            show={showModalTallas}
            onHide={() => setShowModalTallas(false)}
          >
            <TableGroup arrayTablas={tablasTallas} />
          </ModalUniversal>
        </Container>
      </div>
    </div>
  );
};

export default CamisetaDetalle;
