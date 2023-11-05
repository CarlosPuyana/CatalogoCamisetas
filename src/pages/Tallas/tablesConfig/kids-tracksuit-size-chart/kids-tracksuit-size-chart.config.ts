import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { KIDS_TRACKSUIT_SIZE_CHART_DATA } from "../tables.data";

export const KIDS_TRACKSUIT_SIZE_CHART: ITableProperties = {
  cabeceraTabla: "Kids tracksuit Size Chart",
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
      header: "1/2 Chest",
      className: "",
    },
    {
      header: "Pants Length",
      className: "",
    },
    {
      header: "Fit Height",
      className: "",
    },
  ],
  servicioDatos: KIDS_TRACKSUIT_SIZE_CHART_DATA,
};
