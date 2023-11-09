import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { KIDS_SIZE_DATA } from "../tables.data";

export const KIDS_SIZE: ITableProperties = {
  cabeceraTabla: "Kids",
  columnas: [
    {
      header: "Size",
      className: "",
    },
    {
      header: "Height",
      className: "",
    },
    {
      header: "Age",
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
      header: "Waist",
      className: "",
    }
  ],
  servicioDatos: KIDS_SIZE_DATA,
};
