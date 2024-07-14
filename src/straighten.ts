/**
 * Replaces "curly" quotes with straight quotes for simpler downstream processing.
 */
export function straightenQuotes(input: string) {
  return input
    .replaceAll(/[“”]/g, `"`)
    .replaceAll(/[‘’]/g, `'`);
}

/**
 * Replaces em dashes and en dashes with double and single dashes, respectively.
 */
export function unDash(input: string) {
  return input
    .replaceAll(`—`, `--`)
    .replaceAll(`–`, `-`);
}
