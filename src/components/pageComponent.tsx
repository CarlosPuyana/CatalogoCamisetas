import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import generalService from "../services/generalService.ts";
import { IPreguntasFrecuentes } from "../Interfaces/IPreguntasFrecuentes.ts";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TooltipHook } from "./hooks/tooltipHook.tsx";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import "../css/pageGeneral.css";

const PageComponent: React.FC = () => {
  const { opc } = useParams();
  let content;

  switch (opc) {
    case "contacto":
      content = <PaginaContacto />;
      break;
    case "tallas":
      content = <PaginaTallas />;
      break;
    case "precios":
      content = <PaginaPrecios />;
      break;
    case "faqs":
      content = <PreguntasFrecuentes />;
      break;
  }

  return <div className="container-general-pages">{content}</div>;
};

const PaginaContacto: React.FC = () => {
  return (
    <div className="contacto-container">
      <h2>Contacta con nosotros!</h2>
      <p>
        En nuestras redes sociales y podrás estar al tanto de nuestras últimas
        novedades.
      </p>
      <div className="redes-sociales">
        <Link to="https://wa.me/123456789" target="_blank">
          <TooltipHook text={"Texto ejemplo"}>
            <FaWhatsapp size={32} />
          </TooltipHook>
        </Link>
        <TooltipHook text={"Texto ejemplo"}>
          <Link to="https://www.tiktok.com/@ejemplo" target="_blank">
            <FaTiktok size={32} />
          </Link>
        </TooltipHook>
        <TooltipHook text={"Texto ejemplo"}>
          <Link to="https://www.instagram.com/ejemplo" target="_blank">
            <FaInstagram size={32} />
          </Link>
        </TooltipHook>
      </div>
      <p>¿Tienes dudas?</p>
      <Link className="enlace-bonito" to="/page/faqs">Soluciónalas</Link>
    </div>
  );
};

const PaginaTallas: React.FC = () => {
  return (
    <div>
      <h2>Tallas</h2>
      <p>Guía de tallas</p>
    </div>
  );
};

const PaginaPrecios: React.FC = () => {
  return (
    <div>
      <h2>Precios</h2>
      <p>Lista de precios</p>
    </div>
  );
};

const PreguntasFrecuentes: React.FC = () => {
  const [preguntasFrecuentes, setPreguntasFrecuentes] = useState<
    IPreguntasFrecuentes[]
  >([]);

  useEffect(() => {
    const fetchPreguntasFrecuentes = async () => {
      setPreguntasFrecuentes(
        await generalService.getPreguntasRespuestasFrecuentes()
      );
    };

    fetchPreguntasFrecuentes();
  }, []);

  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      <Accordion>
        {preguntasFrecuentes.map((preguntaRespuesta, index) => (
          <Accordion.Item key={index} eventKey={index + ""}>
            <Accordion.Header>{preguntaRespuesta.pregunta}</Accordion.Header>
            <Accordion.Body>{preguntaRespuesta.respuesta}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default PageComponent;
