import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { POLOS_SIZE_DATA } from "../tables.data";

export const POLOS_SIZE: ITableProperties = {
  cabeceraTabla: "Polos Size",
  columnas: [
    {
      header: "Size",
    },
    {
      header: "Length",
      colSubText: "cm",
    },
    {
      header: "Chest",
      colSubText: "cm",
    },
    {
      header: "Sleeve",
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
  servicioDatos: POLOS_SIZE_DATA,
};
