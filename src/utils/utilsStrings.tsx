/**
 * Trunca la cadena y anniade al final tres puntos
 * 
 * @param str la cadena a truncar
 * @param maxLength el límite máximo de la cadena para ser truncada
 * @returns la cadena truncada
 */
export function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}
