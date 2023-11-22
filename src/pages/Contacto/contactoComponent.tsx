import React from "react";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TEXTO_CONTACTO, ICONS_SIZE } from "./constantes/constMensajes";
import { APP_ROUTES } from "../../utils/generalConstants/routes";

const ContactoComponent: React.FC = () => {
  return (
    <div className="contacto-container">
      <h2>{TEXTO_CONTACTO.contactWithUs}</h2>
      <p>{TEXTO_CONTACTO.marketingMsg}</p>
      <div className="redes-sociales">
        <Link to={TEXTO_CONTACTO.whatsapp} target="_blank">
          <FaWhatsapp size={ICONS_SIZE} />
        </Link>
        <Link to={TEXTO_CONTACTO.tikTok} target="_blank">
          <FaTiktok size={ICONS_SIZE} />
        </Link>
        <Link to={TEXTO_CONTACTO.instagram} target="_blank">
          <FaInstagram size={ICONS_SIZE} />
        </Link>
      </div>
      <p>{TEXTO_CONTACTO.anyHelp}</p>
      <Link className="enlace-bonito" to={APP_ROUTES.routePagePrecioFaqs}>
        {TEXTO_CONTACTO.goSolveIt}
      </Link>
    </div>
  );
};

export default ContactoComponent;
