import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import generalService from "../services/generalService.ts";
import { IPreguntasFrecuentes } from "../Interfaces/IPreguntasFrecuentes.ts";

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
      if (preguntasFrecuentes.length === 0) {
        try {
          const preguntas = await generalService.getPreguntasRespuestasFrecuentes();
          setPreguntasFrecuentes(preguntas);
          console.log(preguntas);
        } catch (error) {
          console.error("Error al obtener preguntas frecuentes:", error);
        }
      }
    };

    fetchPreguntasFrecuentes();
  }, [preguntasFrecuentes]);

  return (
    <div>
      <h2>Preguntas Frecuentes</h2>
      <p>Respuestas a las preguntas más comunes</p>
    </div>
  );
};

export default PageComponent;
