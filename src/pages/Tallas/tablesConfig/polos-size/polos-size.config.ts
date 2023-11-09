import { ITableProperties } from "../../../../interfaz/ITableProperties";
import { POLOS_SIZE_DATA } from "../tables.data";

export const POLOS_SIZE: ITableProperties = {
  cabeceraTabla: "Polos Size",
  columnas: [
    {
      header: "Size",
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
  servicioDatos: POLOS_SIZE_DATA,
};
