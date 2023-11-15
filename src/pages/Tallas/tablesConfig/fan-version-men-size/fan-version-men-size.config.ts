import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { FAN_VERSION_MEN_SIZE_DATA } from "../tables.data";

export const FAN_VERSION_MEN_SIZE: ITableProperties = {
  cabeceraTabla: "Fan Version Men Size",
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
    }
  ],
  servicioDatos: FAN_VERSION_MEN_SIZE_DATA,
};
