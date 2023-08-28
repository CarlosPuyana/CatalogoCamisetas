import React, { useEffect, useState } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import Sidebar from './NavBars/sidebar.tsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TopBar from './NavBars/topBar.tsx';
import camisetaService from '../services/camisetaService.ts';
import { ICamiseta } from '../Interfaces/camisetas.ts';
import '../css/sidebar.css';

const CamisetaList: React.FC<{ camisetas: ICamiseta[] }> = ({ camisetas }) => {
  const { busqueda } = useParams();
  const navigate = useNavigate();
  const [camisetasFiltro, setCamisetasFiltro] = useState<ICamiseta[]>(camisetas);
  const [categorias, setCategorias] = useState([]);
  const [teams, setTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const camisetasPerPage = 18;

  useEffect(() => {
    const fetchData = async (query: string | undefined) => {
      if (query) {
        setCamisetasFiltro(await camisetaService.searchCamisetasByNombre(query));
      } else {
        setCamisetasFiltro(camisetas);
      }

      const fetchedCategorias = await camisetaService.getCategorias();
      setCategorias(fetchedCategorias);
      const fetchedTeams = await camisetaService.getEquipos();
      setTeams(fetchedTeams);
      setCurrentPage(1);
    };

    fetchData(busqueda);
  }, [busqueda, camisetas]);

  const handleEquipoSelected = (equipo: string) => {
    navigate(`/busqueda/${equipo}`);
  };

  const pageNumbers = Array.from({ length: Math.ceil(camisetasFiltro.length / camisetasPerPage) });
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCamiseta = currentPage * camisetasPerPage;
  const indexOfFirstCamiseta = indexOfLastCamiseta - camisetasPerPage;
  const currentCamisetas = camisetasFiltro.slice(indexOfFirstCamiseta, indexOfLastCamiseta);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex">
      {/* Botón de hamburguesa */}
      <button className="hamburger-button" onClick={toggleSidebar}>
        ☰
      </button>
      <Sidebar teams={teams} categorias={categorias} onEquipoSelected={handleEquipoSelected} open={sidebarOpen} />
      <div className={`${sidebarOpen ? 'open' : ''} d-flex flex-column align-items-end`}>
        <TopBar />
        <Container className="mt-5" style={{ width: '100%' }}>
          <div className="d-flex flex-wrap align-items-stretch">
            {currentCamisetas.map((camiseta) => (
              <CamisetaCard key={camiseta.id} camiseta={camiseta} />
            ))}
          </div>
          <Pagination className='d-flex justify-content-center'>
            {pageNumbers.map((_, number) => (
              <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Container>
      </div>
    </div>
  );
};

const CamisetaCard: React.FC<{ camiseta: ICamiseta }> = ({ camiseta }) => (
  <div key={camiseta.id} className="mb-4" style={{ flexBasis: '14%', marginLeft: '10px', marginRight: '10px' }}>
    <Link style={{ textDecoration: 'none' }} to={`/camiseta/${camiseta.id}`}>
    <div className="card p-2 d-flex flex-column">
        <img src={camiseta.imagen} className="card-img" alt={camiseta.nombre} />
        <div className="card-body mt-auto">
          <p className="card-text mb-0 card-title" style={{ fontSize: '0.8rem' }}>{camiseta.nombre}</p>
          <p className="card-text" style={{ fontSize: '0.7rem', color: 'gray', textAlign: 'right' }}>{camiseta.equipo}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default CamisetaList;
