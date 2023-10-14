import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import "../../assets/css/sidebar.css";
import { ITeam } from "../../Interfaces/ITeams";
import { ICategoria } from "../../Interfaces/ICategorias";

interface SidebarProps {
  teams: ITeam[];
  categorias: ICategoria[];
  onEquipoSelected: (equipo: string) => void;
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  teams,
  categorias,
  onEquipoSelected,
  open,
}) => {
  useEffect(() => {}, []);

  function quitarEmoji(categoria: string): {
    categoriaSinEmoji: string;
    hasEmoji: boolean;
  } {
    const categoriasEspeciales = [
      "Retro",
      "Baby",
      "Kids",
      "Women",
      "Special Edition",
    ];
    const isCategoriasEspecial = categoriasEspeciales.some((cat) =>
      categoria.includes(cat)
    );

    if (isCategoriasEspecial) {
      // Si se encontraron emojis, reemplaza todas las coincidencias con una cadena vacía.
      const categoriaSinEmoji = categoria.replace(/[\uD800-\uDFFF]./g, "");
      return { categoriaSinEmoji, hasEmoji: true };
    } else {
      // Si no se encontraron emojis, la categoría sin cambios y hasEmoji es false.
      return { categoriaSinEmoji: categoria, hasEmoji: false };
    }
  }

  return (
    <div>
      <div
        className={`sidebar-completo${
          open ? "-open" : ""
        } d-flex flex-column mr-2 justify-content-center align-items-center`}
      >
        <div className={`accordeon ${open ? "open" : ""}`}>
          <Accordion>
            {categorias.map((liga, index) => {
              const equiposLiga = teams.filter(
                (q) => q.categoria_id === liga.id
              );

              const { categoriaSinEmoji, hasEmoji } = quitarEmoji(
                liga.categoria
              );

              const categoriasNoTeams = hasEmoji ? (
                <Accordion.Header
                  onClick={() => onEquipoSelected(categoriaSinEmoji)}
                >
                  {liga.categoria}
                </Accordion.Header>
              ) : (
                <Accordion.Header>{liga.categoria}</Accordion.Header>
              );
              return (
                <Accordion.Item key={liga.categoria} eventKey={index + ""}>
                  {categoriasNoTeams}
                  {equiposLiga.map((equipo) => (
                    <Accordion.Body
                      key={equipo.team}
                      onClick={() => onEquipoSelected(equipo.team)}
                    >
                      {equipo.team}
                    </Accordion.Body>
                  ))}
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
