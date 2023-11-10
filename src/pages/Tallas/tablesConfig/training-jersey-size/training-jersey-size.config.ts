import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { TRAINING_JERSEY_SIZE_DATA } from "../tables.data";

export const TRAINING_JERSEY_SIZE: ITableProperties = {
  cabeceraTabla: "Training Jersey Size",
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
      header: "Chest",
      className: "",
    },
    {
      header: "Sleeve",
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
  servicioDatos: TRAINING_JERSEY_SIZE_DATA,
};
