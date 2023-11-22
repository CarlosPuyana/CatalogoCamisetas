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

/**
 * Pone la primera letra de la palabra a mayusculas
 * 
 * @param theWord la palabra
 * @returns la palabra con la primer letra mayusculas
 */
export function firstLetterToUpperCase(theWord: string) {
  return theWord.charAt(0).toLocaleUpperCase() + theWord.slice(1);
}
