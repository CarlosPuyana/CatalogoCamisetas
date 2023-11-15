import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { PLAYER_VERSION_MEN_SIZE_DATA } from "../tables.data";

export const PLAYER_VERSION_MEN_SIZE: ITableProperties = {
  cabeceraTabla: "Player Version Men Size",
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
    {
      header: "Weight",
      colSubText: "kg",
    },
  ],
  servicioDatos: PLAYER_VERSION_MEN_SIZE_DATA,
};
