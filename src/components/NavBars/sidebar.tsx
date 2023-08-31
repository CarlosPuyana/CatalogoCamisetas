import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { ICategoria } from '../../Interfaces/categorias';
import { ITeam } from '../../Interfaces/teams';
import '../../css/sidebar.css';

interface SidebarProps {
  teams: ITeam[],
  categorias: ICategoria[],
  onEquipoSelected: (equipo: string) => void,
  open: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ teams, categorias, onEquipoSelected, open }) => {
  let i = 0;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  useEffect(() => {

  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <div className={`sidebar-completo ${open ? '-open' : ''} d-flex flex-column vh-100 justify-content-center align-items-center`}>
      <button className={`hamburger-button ${hamburgerActive ? 'active' : ''}`} onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`accordeon ${sidebarOpen ? 'open' : ''}`}>
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
