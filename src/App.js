import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import CamisetaList from "./components/camisetaList.tsx";
import RegisterForm from "./components/Auth/registerForm.tsx";
import LoginForm from "./components/Auth/loginForm.tsx";
import CamisetaForm from "./components/camisetaForm.tsx";
import CamisetaDetalle from "./components/camisetaDetalle.tsx";
import camisetaService from "./services/camisetaService.ts";
import Sidebar from "./components/NavBars/sidebar.tsx";
import TopBar from "./components/NavBars/topBar.tsx";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  // Para esto debería hacerse un servicio propio de momento lo pongo aqui
  const [allCamisetas, setAllCamisetas] = useState([]);
  const [newCamisetas, setNewCamisetas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCamisetas() {
      const fetchedCamisetas = await camisetaService.getAllCamisetas();
      setAllCamisetas(fetchedCamisetas);
      const fetchedNewCamis = await camisetaService.getCamisetasByTemporada(
        "23/24"
      );
      setNewCamisetas(fetchedNewCamis);
    }

    async function fetchTeamsAndCategories() {
      const fetchedCategorias = await camisetaService.getCategorias();
      setCategorias(fetchedCategorias);
      const fetchedTeams = await camisetaService.getEquipos();
      setTeams(fetchedTeams);
    }

    fetchCamisetas();
    fetchTeamsAndCategories();
  }, []);

  const handleEquipoSelected = (equipo) => {
    navigate(`/busqueda/${equipo}`);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="logo-container">
              <img src="" alt="Logo" className="logo" />
              <h2>Camis365</h2>
            </div>
          </Col>
          <Col>
            <TopBar />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Sidebar
              teams={teams}
              categorias={categorias}
              onEquipoSelected={handleEquipoSelected}
            />
          </Col>
          <Col md={10}>
            <Routes>
              <Route
                path="/"
                element={
                  <CamisetaList
                    camisetas={newCamisetas}
                    allCamisetas={allCamisetas}
                  />
                }
              />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/add" element={<CamisetaForm />} />
              <Route
                path="/camiseta/:id"
                element={<CamisetaDetalle camisetas={allCamisetas} />}
              />
              <Route
                path="/busqueda/:busqueda"
                element={<CamisetaList camisetas={allCamisetas} />}
              />
            </Routes>
          </Col>
        </Row>
        <Row>{/** FOOTER */}</Row>
      </Container>
    </div>
  );
}

export default App;
