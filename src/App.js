import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import CamisetaList from "./pages/HomeCamisetas/CamisetasList/CamisetaList";
import RegisterForm from "./pages/Registro/registerForm.tsx";
import LoginForm from "./pages/Login/loginForm.tsx";
import CamisetaForm from "./pages/FormCamisetas/camisetaForm.tsx";
import CamisetaDetalle from "./pages/DetalleCamiseta/CamisetaDetalle"
import camisetaService from "./utils/apis/camisetaService";
import PrincipalSidebar from "./components/NavBars/Sidebars/PrincipalSidebar";
import PrincipalTopbar from "./components/NavBars/Topbars/PrincipalTopbar";
import PageComponent from "./pages/GeneralPage/pageComponent.tsx";
//import Footer from "./components/NavBars/footer.tsx";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  const [allCamisetas, setAllCamisetas] = useState([]);
  const [newCamisetas, setNewCamisetas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Container>
        <Row>
          <PrincipalTopbar />
          <input type="checkbox" id="checkbox" onClick={toggleSidebar} />
          <label htmlFor="checkbox" className="toggle ">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
          {/* <button className="hamburger-button" onClick={toggleSidebar}>
            ☰
          </button> */}
        </Row>
        <Row>
          <Col className={`${sidebarOpen ? 'mostrando' : 'esconder'}`} md={2}>
            <PrincipalSidebar teams={teams} categorias={categorias} onEquipoSelected={handleEquipoSelected} open={sidebarOpen} />
          </Col>
          <Col className={`${sidebarOpen ? 'mostrar-mitad' : 'mostrar-entero'} d-md-flex justify-content-center`} md={10}>
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
              <Route path="/page/:opc" element={<PageComponent />} />
              <Route path="*" element={
                <CamisetaList
                  camisetas={newCamisetas}
                  allCamisetas={allCamisetas}
                />
              } />
            </Routes>
          </Col>
        </Row>
      </Container>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
