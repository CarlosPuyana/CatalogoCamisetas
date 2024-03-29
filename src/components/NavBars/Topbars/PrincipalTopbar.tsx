import React, { useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTshirt,
  FaPhone,
  FaRuler,
  FaDollarSign,
  FaQuestion,
  FaSearch,
} from "react-icons/fa";
import "../../NavBars/Topbars/topbar.css";
import { APP_ROUTES } from "../../../utils/generalConstants/routes";

interface TopBarProps {
  // Define props
}

const PrincipalTopbar: React.FC<TopBarProps> = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchText === ""
      ? navigate(APP_ROUTES.routeHome)
      : navigate(APP_ROUTES.routeSearch + searchText);
  };

  return (
    <div style={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
      <Navbar expand="lg" className="d-flex flex-column align-items-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={APP_ROUTES.routeHome}>
              <FaTshirt /> Inicio
            </Nav.Link>
            <Nav.Link as={Link} to={APP_ROUTES.routePageContacto}>
              <FaPhone /> Contacto
            </Nav.Link>
            <Nav.Link as={Link} to={APP_ROUTES.routePageTallas}>
              <FaRuler /> Tallas
            </Nav.Link>
            <Nav.Link as={Link} to={APP_ROUTES.routePagePrecio}>
              <FaDollarSign /> Precios
            </Nav.Link>
            <Nav.Link as={Link} to={APP_ROUTES.routePagePrecioFaqs}>
              <FaQuestion /> FAQs
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar"
              className="input-text-buscar"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button type="submit" className="button-buscar ml-2">
              <FaSearch />
            </button>
          </Form>
          <div style={{ marginRight: "35px" }}></div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PrincipalTopbar;
