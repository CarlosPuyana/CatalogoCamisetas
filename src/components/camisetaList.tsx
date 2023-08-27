import React, { useEffect, useState } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import Sidebar from './NavBars/sidebar.tsx';
import { Link, useParams } from 'react-router-dom';
import TopBar from './NavBars/topBar.tsx';
import camisetaService from '../services/camisetaService.ts';
import { ICamiseta } from '../Interfaces/camisetas.ts';

const CamisetaList: React.FC<{camisetas: ICamiseta[]}> = ({ camisetas }) => {

  let { busqueda } = useParams();
  const [nuevasCamisetas, setNuevasCamisetas] = useState<ICamiseta[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const camisetasPerPage = 30; // Número de camisetas por página

  useEffect(() => {
    fetchData(busqueda);
  }, [busqueda, camisetas]);

  const fetchData = async (query: string | undefined) => {
    if (query) {
      const busquedita = await camisetaService.searchCamisetasByNombre(query);
      setNuevasCamisetas(busquedita);
      // La busqueda se hace correctamente pero no se filtra en pantalla por algo de la paginacion
    } else {
      setNuevasCamisetas(camisetas);
    }
  };

  const handleEquipoSelected = (equipo: string) => {
    fetchData(equipo);
  };
  
  const camisetasToDisplay = busqueda ? nuevasCamisetas : camisetas;
  const indexOfLastCamiseta = currentPage * camisetasPerPage;
  const indexOfFirstCamiseta = indexOfLastCamiseta - camisetasPerPage;
  const currentCamisetas = camisetasToDisplay.slice(indexOfFirstCamiseta, indexOfLastCamiseta);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(camisetasToDisplay.length / camisetasPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="d-flex">
      <Sidebar camisetas={camisetas} onEquipoSelected={handleEquipoSelected}/>
      <div className="d-flex flex-column align-items-end">
        <TopBar />
        <Container className="mt-5" style={{ width: '100%' }}>
          <h2 className="text-center mb-4">Lista de Camisetas</h2>
          <div className="d-flex flex-wrap align-items-stretch">
            { currentCamisetas.map((camiseta) => (
              <div key={camiseta.id} className="mb-4" style={{ flexBasis: '14%', marginLeft: '10px', marginRight: '10px' }}>
                <Link to={`/camiseta/${camiseta.id}`}>
                  <div className="card p-2 d-flex flex-column h-100">
                    <img src={camiseta.imagen} className="card-img-top" alt={camiseta.nombre} />
                    <div className="card-body mt-auto">
                      <p className="card-text mb-0" style={{ fontSize: '0.8rem' }}>{camiseta.nombre}</p>
                      <p className="card-text" style={{ fontSize: '0.7rem', color: 'gray', textAlign: 'right' }}>{camiseta.equipo}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Pagination>
          {pageNumbers.map((number) => (
              <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                {number}
              </Pagination.Item>
            ))}
          </Pagination>
        </Container>
      </div>
    </div>
  );
};

export default CamisetaList;
