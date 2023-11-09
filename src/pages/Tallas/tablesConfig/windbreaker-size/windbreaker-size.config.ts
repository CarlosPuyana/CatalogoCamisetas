import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { WINDBREAKER_SIZE_DATA } from "../tables.data";

export const WINDBREAKER_SIZE: ITableProperties = {
  cabeceraTabla: "Windbreaker Size",
  columnas: [
    {
      header: "Size",
      className: "",
    },
    {
      header: "Length",
      className: "",
    },
    {
      header: "Bust",
      className: "",
    },
    {
      header: "Height",
      className: "",
    },
    {
      header: "Weight",
      className: "",
    },
  ],
  servicioDatos: WINDBREAKER_SIZE_DATA,
};
