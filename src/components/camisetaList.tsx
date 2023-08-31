import React, { useEffect, useState } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import camisetaService from '../services/camisetaService.ts';
import { ICamiseta } from '../Interfaces/camisetas';
import '../css/camisetasList.css';

const CamisetaList: React.FC<{ camisetas: ICamiseta[] }> = ({ camisetas }) => {
  const { busqueda } = useParams();
  const [camisetasFiltro, setCamisetasFiltro] = useState<ICamiseta[]>(camisetas);
  const [currentPage, setCurrentPage] = useState(1);
  const camisetasPerPage = 18;

  useEffect(() => {
    const fetchData = async (query: string | undefined) => {
      if (query) {
        setCamisetasFiltro(await camisetaService.searchCamisetasByNombre(query));
      } else {
        setCamisetasFiltro(camisetas);
      }
      setCurrentPage(1);
    };

    fetchData(busqueda);
  }, [busqueda, camisetas]);

  const pageNumbers = Array.from({ length: Math.ceil(camisetasFiltro.length / camisetasPerPage) });
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCamiseta = currentPage * camisetasPerPage;
  const indexOfFirstCamiseta = indexOfLastCamiseta - camisetasPerPage;
  const currentCamisetas = camisetasFiltro.slice(indexOfFirstCamiseta, indexOfLastCamiseta);

  return (
    <div className="d-flex">
      <Container className="mt-5" style={{ width: '100%' }}>
        <div className="d-flex flex-wrap align-items-center">
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
  );
};

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  } else {
    return str;
  }
}

const CamisetaCard: React.FC<{ camiseta: ICamiseta }> = ({ camiseta }) => (
  <div key={camiseta.id} className="mb-4 align-items-center" style={{ flexBasis: '14%', marginLeft: '10px', marginRight: '10px' }}>
    <Link style={{ textDecoration: 'none' }} to={`/camiseta/${camiseta.id}`}>
    <div className="cardi p-2 d-flex flex-column">
        <div className="cardi-img-container">
        <img src={camiseta.imagen} className="imagen-cardi" alt={camiseta.nombre} />
        </div>
        <div className="card-body mt-auto">
          <p className="card-text mt-4 pt-2 cardi-title" style={{ fontSize: '0.8rem' }}>{ truncateString(camiseta.nombre, 30)}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default CamisetaList;
