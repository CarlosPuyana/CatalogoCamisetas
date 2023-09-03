import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaPhone,
  FaRuler,
  FaDollarSign,
  FaQuestion,
} from "react-icons/fa";
import "../../css/topbar.css";

interface TopBarProps {
  // Define props
}

const TopBar: React.FC<TopBarProps> = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText === "") navigate("/");
    else navigate(`/busqueda/${searchText}`);
  };

  return (
    <div style={{  width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
      <Navbar expand="lg" className="d-flex flex-column align-items-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              <FaHome /> Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/page/contacto">
              <FaPhone /> Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/page/tallas">
              <FaRuler /> Tallas
            </Nav.Link>
            <Nav.Link as={Link} to="/page/precios">
              <FaDollarSign /> Precios
            </Nav.Link>
            <Nav.Link as={Link} to="/page/faqs">
              <FaQuestion /> FAQs
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center" onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder="Buscar"
              className="mr-sm-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div style={{ marginRight: "10px" }}></div>
            <Button variant="outline-success" type="submit" className="ml-2">
              Buscar
            </Button>
          </Form>
          <div style={{ marginRight: "35px" }}></div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
