import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { SHORTS_SIZE_DATA } from "../tables.data";

export const SHORTS_SIZE: ITableProperties = {
  cabeceraTabla: "Shorts Size",
  columnas: [
    {
      header: "Size",
    },
    {
      header: "Hip",
      colSubText: "cm",
    },
    {
      header: "Waist",
      colSubText: "cm",
    },
    {
      header: "Lenght",
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
  servicioDatos: SHORTS_SIZE_DATA,
};
