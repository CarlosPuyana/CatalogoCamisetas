import { firstLetterToUpperCase } from "./utilsStrings";

export function setNavigatorTabName(nuevoNombre: string) {
  document.title = firstLetterToUpperCase(nuevoNombre);
}
