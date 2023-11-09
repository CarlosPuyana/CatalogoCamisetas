import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { WOMEN_SIZE_DATA } from "../tables.data";

export const WOMEN_SIZE: ITableProperties = {
  cabeceraTabla: "Women",
  columnas: [
    {
      header: "Size",
      className: "",
    },
    {
      header: "Comprimiento",
      className: "",
    },
    {
      header: "Width",
      className: "",
    },
    {
      header: "Height",
      className: "",
    },
  ],
  servicioDatos: WOMEN_SIZE_DATA,
};
