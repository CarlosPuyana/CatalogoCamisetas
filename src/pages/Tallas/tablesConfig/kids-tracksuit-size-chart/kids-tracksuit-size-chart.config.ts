import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { KIDS_TRACKSUIT_SIZE_CHART_DATA } from "../tables.data";

export const KIDS_TRACKSUIT_SIZE_CHART: ITableProperties = {
  cabeceraTabla: "Kids tracksuit Size Chart",
  columnas: [
    {
      header: "Size",
      colSubText: "cm",
    },
    {
      header: "Length",
      colSubText: "cm",
    },
    {
      header: "1/2 Chest",
      colSubText: "cm",
    },
    {
      header: "Pants Length",
      colSubText: "cm",
    },
    {
      header: "Fit Height",
      colSubText: "cm",
    },
  ],
  servicioDatos: KIDS_TRACKSUIT_SIZE_CHART_DATA,
};
