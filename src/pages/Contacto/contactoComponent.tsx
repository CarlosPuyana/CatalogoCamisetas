import React from "react";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactoComponent: React.FC = () => {
  const ICONS_SIZE = 32;

  return (
    <div className="contacto-container">
      <h2>Contacta con nosotros!</h2>
      <p>
        En nuestras redes sociales y podrás estar al tanto de nuestras últimas
        novedades.
      </p>
      <div className="redes-sociales">
        <Link to="https://wa.me/123456789" target="_blank">
          <FaWhatsapp size={ICONS_SIZE} />
        </Link>
        <Link to="https://www.tiktok.com/@ejemplo" target="_blank">
          <FaTiktok size={ICONS_SIZE} />
        </Link>
        <Link to="https://www.instagram.com/ejemplo" target="_blank">
          <FaInstagram size={ICONS_SIZE} />
        </Link>
      </div>
      <p>¿Tienes dudas?</p>
      <Link className="enlace-bonito" to="/page/faqs">
        Soluciónalas
      </Link>
    </div>
  );
};

export default ContactoComponent;
