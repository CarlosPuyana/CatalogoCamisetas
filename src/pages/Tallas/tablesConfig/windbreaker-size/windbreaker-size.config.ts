import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { WINDBREAKER_SIZE_DATA } from "../tables.data";

export const WINDBREAKER_SIZE: ITableProperties = {
  cabeceraTabla: "Windbreaker Size",
  columnas: [
    {
      header: "Size",
    },
    {
      header: "Length",
      colSubText: "cm",
    },
    {
      header: "Bust",
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
  servicioDatos: WINDBREAKER_SIZE_DATA,
};
