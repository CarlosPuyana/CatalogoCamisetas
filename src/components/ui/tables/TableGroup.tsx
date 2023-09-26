import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TableGenerator from "./TableGenerator.tsx";

const TableGroup: React.FC<{ arrayTablas }> = ({ arrayTablas }) => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(null);

  const handleClickTabla = (tabla) => {
    setTablaSeleccionada(tabla);
  };

  return (
    <Container>
      <div>
        {arrayTablas.map((tabla, index) => (
          <Button
            key={index}
            variant="outline-primary"
            onClick={() => handleClickTabla(tabla)}
          >
            {tabla.cabeceraTabla}
          </Button>
        ))}
      </div>
      <div>
        {tablaSeleccionada && <TableGenerator tabla={tablaSeleccionada} />}
      </div>
    </Container>
  );
};

export default TableGroup;
