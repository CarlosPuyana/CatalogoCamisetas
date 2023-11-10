import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { NBA_SILK_SIZE_DATA } from "../tables.data";

export const NBA_SILK_SIZE: ITableProperties = {
  cabeceraTabla: "NBA Silk Size",
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
      header: "Shoulders",
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
  servicioDatos: NBA_SILK_SIZE_DATA,
};
