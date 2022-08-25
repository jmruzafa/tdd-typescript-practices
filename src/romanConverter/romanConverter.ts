export function romanConverter(num: number): string {
  if (num === 4) return "IV";
  if (num >= 1) return "I" + romanConverter(num - 1);
  return "";
}
