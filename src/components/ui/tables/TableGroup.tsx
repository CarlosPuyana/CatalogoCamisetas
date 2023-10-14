import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../../assets/css/tableGroup.css";
import TableGenerator from "./TableGenerator";

const TableGroup: React.FC<{ arrayTablas: any }> = ({ arrayTablas }) => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(arrayTablas[0]);

  const handleClickTabla = (tabla: any) => {
    setTablaSeleccionada(tabla);
  };

  return (
    <Container>
      <div className="tableSelectorContainer">
        {arrayTablas.map((tabla: any, index: any) => (
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
