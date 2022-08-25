import { romanConverter } from "../src/romanConverter/romanConverter";

describe("Roman Numeral Calculator", () => {
  it("should exist a function that return something", () => {
    expect(romanConverter(0)).toEqual("");
  });

  it.each([
    ["", 0],
    ["I", 1],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["VI", 6],
    ["VII", 7],
    ["VIII", 8],
    ["IX", 9],
    ["X", 10],
    ["XI", 11],
    ["XII", 12],
    ["XIII", 13],
    ["XIV", 14],
    ["XV", 15],
    ["XVII", 17],
    ["XXIII", 23],
    ["XL", 40],
    ["L", 50],
  ])("should return '%s' when passing %i", (expected, arg) => {
    expect(romanConverter(arg)).toBe(expected);
  });
});
