import React from "react";
import { useParams } from "react-router-dom";
import "../../assets/global-css/pageGeneral.css";
import ContactoComponent from "../Contacto/contactoComponent";
import TallasComponent from "../Tallas/tallasComponent";
import PreciosComponent from "../Precios/preciosComponent";
import PreguntasFrecuentesComponent from "../PreguntasFrecuentes/preguntasFrecuentes";

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
