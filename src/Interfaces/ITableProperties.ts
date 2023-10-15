export interface ITableColumn {
  header: string;
  className: string;
}

export interface ITableProperties {
  cabeceraTabla: string;
  columnas: ITableColumn[];
  servicioDatos: any;
}
