import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import generalService from "../services/generalService.ts";
import { IPreguntasFrecuentes } from "../Interfaces/IPreguntasFrecuentes.ts";
import { Accordion } from "react-bootstrap";

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

  return <div>{content}</div>;
};

const PaginaContacto: React.FC = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <p>Información de contacto</p>
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
      // MEJORAR ESTO
      setPreguntasFrecuentes(
        await generalService.getPreguntasRespuestasFrecuentes()
      );
    };

    fetchPreguntasFrecuentes();
  }, [preguntasFrecuentes]);

  return (
    <div style={{ width: "90%" }}>
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
