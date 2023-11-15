import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { NBA_SILK_SIZE_DATA } from "../tables.data";

export const NBA_SILK_SIZE: ITableProperties = {
  cabeceraTabla: "NBA Silk Size",
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
      header: "Shoulders",
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
  servicioDatos: NBA_SILK_SIZE_DATA,
};
