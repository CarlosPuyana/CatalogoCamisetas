import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { PLAYER_VERSION_MEN_SIZE_DATA } from "../tables.data";

export const PLAYER_VERSION_MEN_SIZE: ITableProperties = {
  cabeceraTabla: "Player Version Men Size",
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
    },
  ],
  servicioDatos: PLAYER_VERSION_MEN_SIZE_DATA,
};
