import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { TRAINING_JERSEY_SIZE_DATA } from "../tables.data";

export const TRAINING_JERSEY_SIZE: ITableProperties = {
  cabeceraTabla: "Training Jersey Size",
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
  servicioDatos: TRAINING_JERSEY_SIZE_DATA,
};
