import React from "react";
import { useParams } from "react-router-dom";
import PreciosComponent from "../Precios/preciosComponent.tsx";
import TallasComponent from "../Tallas/tallasComponent.tsx";
import ContactoComponent from "../Contacto/contactoComponent.tsx";
import PreguntasFrecuentesComponent from "../PreguntasFrecuentes/preguntasFrecuentes.tsx";
import "../../assets/css/pageGeneral.css";

const PageComponent: React.FC = () => {
  const { opc } = useParams();
  let content;

  switch (opc) {
    case "contacto":
      content = <ContactoComponent />;
      break;
    case "tallas":
      content = <TallasComponent />;
      break;
    case "precios":
      content = <PreciosComponent />;
      break;
    case "faqs":
      content = <PreguntasFrecuentesComponent />;
      break;
  }

  return <div className="container-general-pages">{content}</div>;
};

export default PageComponent;
