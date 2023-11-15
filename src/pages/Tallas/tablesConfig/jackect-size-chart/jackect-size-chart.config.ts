import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { JACKECT_SIZE_CHART_DATA } from "../tables.data";

export const JACKECT_SIZE_CHART: ITableProperties = {
  cabeceraTabla: "Jacket size chart",
  columnas: [
    {
      header: "Size",
    },
    {
      header: "Dress length",
      colSubText: "cm",
    },
    {
      header: "Bust",
      colSubText: "cm",
    },
    {
      header: "Pants lenth",
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
  servicioDatos: JACKECT_SIZE_CHART_DATA,
};
