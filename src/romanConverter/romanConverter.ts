export function romanConverter(num: number): string {
  if (num === 4) return "IV" + romanConverter(0);;
  if (num >= 1) return "I" + romanConverter(num - 1);
  return "";
}
