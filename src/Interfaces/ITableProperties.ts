import { ITableColumn } from "./ITableColumn";

export interface ITableProperties {
  cabeceraTabla: string;
  columnas: ITableColumn[];
  servicioDatos;
}
