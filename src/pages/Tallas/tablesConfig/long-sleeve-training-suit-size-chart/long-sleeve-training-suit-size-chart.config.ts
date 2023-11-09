import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART_DATA } from "../tables.data";

export const LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART: ITableProperties = {
  cabeceraTabla: "Long Sleeve Training Suit Size Chart",
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
      header: "Bust",
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
  servicioDatos: LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART_DATA,
};
