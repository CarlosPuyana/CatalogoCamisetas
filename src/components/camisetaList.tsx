import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './NavBars/sidebar.tsx';
import { Link } from 'react-router-dom';
import TopBar from './NavBars/topBar.tsx';

interface Camiseta {
  id: number;
  create_at: number;
  equipo: string;
  liga: string;
  temporada: string;
  imagen: string;
  nombre: string;
  descripcion: string;
}

interface CamisetaListProps {
  camisetas: Camiseta[];
}

const CamisetaList: React.FC<CamisetaListProps> = ({ camisetas }) => {

  useEffect(() => {

  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex flex-column align-items-end">
        <TopBar />
        <Container className="mt-5" style={{ width: '100%' }}>
          <h2 className="text-center mb-4">Lista de Camisetas</h2>
          <div className="d-flex flex-wrap align-items-stretch">
            {camisetas.map((camiseta) => (
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
        </Container>
      </div>
    </div>
  );
};

export default CamisetaList;
