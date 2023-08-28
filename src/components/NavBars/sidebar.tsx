import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { ICategoria } from '../../Interfaces/categorias.ts';
import { ITeam } from '../../Interfaces/teams.ts';
import '../../css/sidebar.css';

interface SidebarProps {
  teams: ITeam[],
  categorias: ICategoria[],
  onEquipoSelected: (equipo: string) => void,
  open: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ teams, categorias, onEquipoSelected, open }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  let i = 0;

  useEffect(() => {

  }, []);


  return (
    
    <div className={`sidebar-completo${open ? '-open' : ''} d-flex flex-column vh-100 justify-content-center align-items-center`}>
      <div className="logo-container">
        <img src='' alt="Logo" className="logo" />
        <h2>Camis365</h2>
      </div>
      <div className="accordeon">
        <Accordion>
          {categorias.map((liga) => {
            const equiposLiga = teams.filter(q => q.categoria_id === liga.id);
            const categoriasNoTeams =
              liga.categoria === 'Retro' || liga.categoria === 'Kids' ? (
                <Accordion.Header onClick={() => onEquipoSelected(liga.categoria)}>
                  {liga.categoria}
                </Accordion.Header>
              ) : (
                <Accordion.Header>{liga.categoria}</Accordion.Header>
              );
            return (
              <Accordion.Item key={liga.categoria} eventKey={++i + ""}>
                {categoriasNoTeams}
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
    </div>
  );
};

export default Sidebar;
