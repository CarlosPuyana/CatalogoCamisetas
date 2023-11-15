import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { KIDS_SIZE_DATA } from "../tables.data";

export const KIDS_SIZE: ITableProperties = {
  cabeceraTabla: "Kids",
  columnas: [
    {
      header: "Size",
    },
    {
      header: "Height",
      colSubText: "cm",
    },
    {
      header: "Age",
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
      header: "Waist",
      colSubText: "cm",
    }
  ],
  servicioDatos: KIDS_SIZE_DATA,
};
