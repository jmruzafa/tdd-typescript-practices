const symbols: Record<number, string> = {
  0: "",
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

const keys = Object.keys(symbols)
  .map((key) => Number(key))
  .reverse();

function getKey(number: number): number {
  return keys.filter((key) => number >= key)[0];
}

export function romanConverter(num: number): string {
  const key = getKey(num);
  if (key === 0) {
    return symbols[0];
  }
  return symbols[key] + romanConverter(num - key);
}
