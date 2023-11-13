import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../../ui/TablesComponents/TableGenerator/TableGenerator";
import "./tableGroup.css"
import TableGenerator from "../TableGenerator/TableGenerator";
import { ButtonAppTheme } from "../../Buttons/Buttons";

const TableGroup: React.FC<{ arrayTablas: any }> = ({ arrayTablas }) => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(arrayTablas[0]);

  return (
    <Container>
      <div className="tableSelectorContainer">
        {arrayTablas.map((tabla: any, index: number) => (
          <ButtonAppTheme
            key={index}
            onClick={() => setTablaSeleccionada(tabla)}
          >
            {tabla.cabeceraTabla}
          </ButtonAppTheme>
        ))}
      </div>
      <div className="tableContainer">
        {tablaSeleccionada && <TableGenerator tabla={tablaSeleccionada} />}
      </div>
    </Container>
  );
};

export default TableGroup;
