import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TableGenerator from "./TableGenerator.tsx";
import "../../../assets/css/tableGroup.css";

const TableGroup: React.FC<{ arrayTablas }> = ({ arrayTablas }) => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(arrayTablas[0]);

  const handleClickTabla = (tabla) => {
    setTablaSeleccionada(tabla);
  };

  return (
    <Container>
      <div className="tableSelectorContainer">
        {arrayTablas.map((tabla, index) => (
          <Button
            key={index}
            className="button"
            onClick={() => handleClickTabla(tabla)}
          >
            {tabla.cabeceraTabla}
          </Button>
        ))}
      </div>
      <div className="tableContainer">
        {tablaSeleccionada && <TableGenerator tabla={tablaSeleccionada} />}
      </div>
    </Container>
  );
};

export default TableGroup;
