import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { ADIDAS_SHORTS_TABLE_DATA } from "../tables.data";

export const ADIDAS_SHORTS_TABLE: ITableProperties = {
  cabeceraTabla: "Adidas Player Shorts Size Chart",
  columnas: [
    {
      header: "S",
    },
    {
      header: "M",
    },
    {
      header: "L",
    },
    {
      header: "XL",
    },
    {
      header: "2XL",
    },
    {
      header: "3XL",
    },
  ],
  servicioDatos: ADIDAS_SHORTS_TABLE_DATA,
};
