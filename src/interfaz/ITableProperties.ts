export interface ITableColumn {
  header: string;
  colSubText?: string
  className?: string;
}

export interface ITableProperties {
  cabeceraTabla: string;
  columnas: ITableColumn[];
  servicioDatos: any;
  className?: string;
}
