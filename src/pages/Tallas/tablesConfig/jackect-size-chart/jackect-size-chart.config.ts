import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { JACKECT_SIZE_CHART_DATA } from "../tables.data";

export const JACKECT_SIZE_CHART: ITableProperties = {
  cabeceraTabla: "Jacket size chart",
  columnas: [
    {
      header: "Size",
      className: "",
    },
    {
      header: "Dress length",
      className: "",
    },
    {
      header: "Bust",
      className: "",
    },
    {
      header: "Pants lenth",
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
  servicioDatos: JACKECT_SIZE_CHART_DATA,
};
