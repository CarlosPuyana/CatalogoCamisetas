import React from "react";
import { ITableProperties } from "../../../interfaz/ITableProperties";
import { Container, Table } from "react-bootstrap";

const TableGenerator: React.FC<{ tabla: ITableProperties }> = ({ tabla }) => {
  return (
    <Container>
      <h3>{tabla.cabeceraTabla}</h3>
      <Table>
        <thead>
          <tr>
            {tabla.columnas.map((colsTabla) => (
              <th>{colsTabla.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabla.servicioDatos.filas.map((fila: string[] | number[]) => {
            <tr>
              {fila.map((valor: string | number) => (
                <td>{valor}</td>
              ))}
            </tr>;
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableGenerator;
