import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { PANTS_SIZE_DATA } from "../tables.data";

export const PANTS_SIZE: ITableProperties = {
  cabeceraTabla: "Pants Size",
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
  servicioDatos: PANTS_SIZE_DATA,
};
