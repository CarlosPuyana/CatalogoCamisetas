import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { PANTS_SIZE_DATA } from "../tables.data";

export const PANTS_SIZE: ITableProperties = {
  cabeceraTabla: "Pants Size",
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
  servicioDatos: PANTS_SIZE_DATA,
};
