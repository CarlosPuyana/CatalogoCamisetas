import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { ICamiseta } from '../../Interfaces/camisetas.ts';

interface SidebarProps {
  camisetas: ICamiseta[], 
  onEquipoSelected: (equipo: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ camisetas, onEquipoSelected }) => {
  const uniqueLigas = [...new Set(camisetas.map((item) => item.liga))];
  let i = 0;

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <div className="logo-container">
        <img src='' alt="Logo" className="logo" />
        <h2>NOMBRE DE LA WEB</h2>
      </div>
      <Accordion>
        {uniqueLigas.map((liga) => {
          const uniqueEquipos = [...new Set(camisetas.filter((camiseta) => camiseta.liga === liga).map((camiseta) => camiseta.equipo))];
          return (
            <Accordion.Item key={liga} eventKey={++i + ""}>
              <Accordion.Header>{liga}</Accordion.Header>
              {uniqueEquipos.map((equipo) => (
                <Accordion.Body key={equipo} onClick={() => onEquipoSelected(equipo)}>
                  {equipo}
                </Accordion.Body>
              ))}
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Sidebar;
