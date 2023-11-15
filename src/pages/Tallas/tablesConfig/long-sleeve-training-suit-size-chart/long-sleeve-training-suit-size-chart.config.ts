import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART_DATA } from "../tables.data";

export const LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART: ITableProperties = {
  cabeceraTabla: "Long Sleeve Training Suit Size Chart",
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
  servicioDatos: LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART_DATA,
};
