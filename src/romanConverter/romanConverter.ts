export function romanConverter(num: number): string {
  if (num === 4) return "IV" + romanConverter(num - 4);
  if (num >= 1) return "I" + romanConverter(num - 1);
  return "";
}
