import React from "react";
import "./tableGenerator.css";
import {
  ITableColumn,
  ITableProperties,
} from "../../../../interfaz/ITableProperties";
import { Container } from "react-bootstrap";

const TableGenerator: React.FC<{ tabla: ITableProperties }> = ({ tabla }) => {
  return (
    <Container className="centrao">
      <h3 className="hader-table">{tabla.cabeceraTabla}</h3>
      <table>
        <thead>
          <tr>
            {tabla.columnas.map((colsTabla: ITableColumn) => (
              <th key={colsTabla.header} className="th-with-subtext">
                {colsTabla.header}
                {colsTabla.colSubText && (
                  <div className="sub-text-circle">
                    <div className="sub-text">{colsTabla.colSubText}</div>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabla.servicioDatos.filas.map(
            (fila: (string | number)[], filaIndex: number) => (
              <tr key={filaIndex}>
                {fila.map((valor: string | number, columnaIndex: number) => (
                  <td key={columnaIndex}>{valor}</td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default TableGenerator;
