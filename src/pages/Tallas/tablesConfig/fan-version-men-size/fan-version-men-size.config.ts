import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { FAN_VERSION_MEN_SIZE_DATA } from "../tables.data";

export const FAN_VERSION_MEN_SIZE: ITableProperties = {
  cabeceraTabla: "Fan Version Men Size",
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
    {
      header: "Weight",
      className: "",
    }
  ],
  servicioDatos: FAN_VERSION_MEN_SIZE_DATA,
};
