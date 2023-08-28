import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { ICategoria } from '../../Interfaces/categorias.ts';
import { ITeam } from '../../Interfaces/teams.ts';

interface SidebarProps {
  teams: ITeam[],
  categorias: ICategoria[],
  onEquipoSelected: (equipo: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ teams, categorias, onEquipoSelected }) => {
  let i = 0;

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <div className="logo-container">
        <img src='' alt="Logo" className="logo" />
        <h2>Camis365</h2>
      </div>
      <Accordion>
        {categorias.map((liga) => {
          const equiposLiga = teams.filter(q => q.categoria_id === liga.id);
          return (
            <Accordion.Item key={liga.categoria} eventKey={++i + ""}>
              <Accordion.Header>{liga.categoria}</Accordion.Header>
              {equiposLiga.map((equipo) => (
                <Accordion.Body key={equipo.team} onClick={() => onEquipoSelected(equipo.team)}>
                  {equipo.team}
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
