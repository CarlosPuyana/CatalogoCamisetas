import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { ADIDAS_SHORTS_TABLE_DATA } from "../tables.data";

export const ADIDAS_SHORTS_TABLE: ITableProperties = {
  cabeceraTabla: "Adidas Player Shorts Size Chart",
  columnas: [
    {
      header: "S",
      className: "",
    },
    {
      header: "M",
      className: "",
    },
    {
      header: "L",
      className: "",
    },
    {
      header: "XL",
      className: "",
    },
    {
      header: "2XL",
      className: "",
    },
    {
      header: "3XL",
      className: "",
    },
  ],
  servicioDatos: ADIDAS_SHORTS_TABLE_DATA,
};
