import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { WOMEN_SIZE_DATA } from "../tables.data";

export const WOMEN_SIZE: ITableProperties = {
  cabeceraTabla: "Women",
  columnas: [
    {
      header: "Size",
    },
    {
      header: "Comprimiento",
      colSubText: "cm",
    },
    {
      header: "Width",
      colSubText: "cm",
    },
    {
      header: "Height",
      colSubText: "cm",
    },
  ],
  servicioDatos: WOMEN_SIZE_DATA,
};
