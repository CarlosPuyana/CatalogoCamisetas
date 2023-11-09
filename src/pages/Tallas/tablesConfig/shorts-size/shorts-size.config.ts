import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { SHORTS_SIZE_DATA } from "../tables.data";

export const SHORTS_SIZE: ITableProperties = {
  cabeceraTabla: "Shorts Size",
  columnas: [
    {
      header: "Size",
      className: "",
    },
    {
      header: "Hip",
      className: "",
    },
    {
      header: "Waist",
      className: "",
    },
    {
      header: "Lenght",
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
  servicioDatos: SHORTS_SIZE_DATA,
};
